"use server"

import { redirect } from "next/navigation"

interface MeetingData {
  title: string
  description: string
  date: string
  time: string
  duration: string
  emails: string[]
  organizerName: string
  organizerEmail: string
  meetingLink: string
  platform: string
}

export async function createMeeting(formData: FormData) {
  try {
    // Extract form data
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const duration = formData.get("duration") as string
    const emailsString = formData.get("emails") as string
    const organizerName = formData.get("organizerName") as string
    const organizerEmail = formData.get("organizerEmail") as string
    const meetingLink = formData.get("meetingLink") as string
    const platform = formData.get("platform") as string

    // Parse emails
    const emails = emailsString
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email.length > 0)

    if (emails.length === 0) {
      throw new Error("At least one participant email is required")
    }

    if (!meetingLink) {
      throw new Error("Meeting link is required")
    }

    // Format date and time for Bangladesh timezone
    const meetingDateTime = new Date(`${date}T${time}`)
    const bangladeshTime = meetingDateTime.toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      dateStyle: "full",
      timeStyle: "short",
    })

    // Send emails using Brevo
    await sendMeetingInvitations({
      title,
      description,
      date,
      time,
      duration,
      emails,
      organizerName,
      organizerEmail,
      meetingLink,
      platform,
      bangladeshTime,
    })

    // Redirect to success page with meeting details
    const params = new URLSearchParams({
      title,
      date: bangladeshTime,
      link: meetingLink,
      participants: emails.length.toString(),
      platform,
    })

    redirect(`/success?${params.toString()}`)
  } catch (error) {
    console.error("Error creating meeting:", error)
    throw new Error("Failed to create meeting. Please try again.")
  }
}

async function sendMeetingInvitations(data: MeetingData & { bangladeshTime: string }) {
  const brevoApiKey = process.env.BREVO_API_KEY

  if (!brevoApiKey) {
    throw new Error("Brevo API key not configured")
  }

  const platformIcon = data.platform === "zoom" ? "🎥" : "📹"
  const platformName = data.platform === "zoom" ? "Zoom" : "Google Meet"

  const emailContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2px; border-radius: 16px;">
      <div style="background: white; border-radius: 14px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 2px;">SUCHIKA</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">Meeting Scheduler</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
          <h2 style="color: #2d3748; margin: 0 0 20px 0; font-size: 24px;">You're invited to a meeting!</h2>
          
          <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #667eea;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748; font-size: 20px;">${data.title}</h3>
            <div style="color: #4a5568; line-height: 1.6;">
              <p style="margin: 8px 0;"><strong>📧 Organized by:</strong> ${data.organizerName} (${data.organizerEmail})</p>
              <p style="margin: 8px 0;"><strong>📅 Date & Time:</strong> ${data.bangladeshTime} (Bangladesh Time)</p>
              <p style="margin: 8px 0;"><strong>⏱️ Duration:</strong> ${data.duration} minutes</p>
              <p style="margin: 8px 0;"><strong>${platformIcon} Platform:</strong> ${platformName}</p>
              ${data.description ? `<p style="margin: 15px 0 8px 0;"><strong>📝 Description:</strong></p><p style="margin: 0; padding: 10px; background: white; border-radius: 6px; font-style: italic;">${data.description}</p>` : ""}
            </div>
          </div>

          <div style="text-align: center; margin: 35px 0;">
            <a href="${data.meetingLink}" 
               style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
              ${platformIcon} Join ${platformName} Meeting
            </a>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #6c757d; font-size: 14px; text-align: center;">
              <strong>Meeting Link:</strong><br>
              <a href="${data.meetingLink}" style="color: #667eea; word-break: break-all;">${data.meetingLink}</a>
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="margin: 0; color: #6c757d; font-size: 12px;">
            Powered by <strong style="color: #667eea;">SUCHIKA</strong> • Simple Meeting Scheduling for Bangladesh
          </p>
        </div>
      </div>
    </div>
  `

  // Send email to each participant
  for (const email of data.emails) {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          name: `${data.organizerName} via Suchika`,
          email: data.organizerEmail,
        },
        to: [{ email }],
        subject: `📅 Meeting Invitation: ${data.title} | Suchika`,
        htmlContent: emailContent,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Brevo API error:", error)
      throw new Error(`Failed to send email to ${email}`)
    }
  }
}
