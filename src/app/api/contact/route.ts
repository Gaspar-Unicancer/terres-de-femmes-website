import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    // Sauvegarde en base Supabase
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }])

    if (error) {
      console.error('Supabase error:', error)
      // Ne pas bloquer si la table n'existe pas encore
    }

    // TODO: Configurer RESEND_API_KEY dans .env.local pour l'envoi email
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'site@terre-de-femmes.fr',
    //   to: 'contact@terre-de-femmes.fr',
    //   subject: `Nouveau message de ${name}`,
    //   text: `De: ${name} (${email})\n\n${message}`,
    // })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
