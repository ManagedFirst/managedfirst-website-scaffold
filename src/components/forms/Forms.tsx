'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { IconCheck, IconMail } from '@/components/icons'

// ── Shared Input component ────────────────────────────────────────────────────
interface FieldProps {
  label: string
  error?: string
  children: React.ReactNode
  required?: boolean
}

function Field({ label, error, children, required }: FieldProps) {
  return (
    <div>
      <label className="block text-label font-medium text-charcoal mb-1.5">
        {label}{required && <span className="text-red ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-caption text-red animate-fade-in">{error}</p>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ContactForm
// ─────────────────────────────────────────────────────────────────────────────
interface ContactInputs {
  name: string
  organisation: string
  email: string
  phone?: string
  subject: string
  message: string
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInputs>()

  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error ?? 'Something went wrong')
      }
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Please try again or email us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center bg-teal-light rounded-brand border border-teal animate-fade-in">
        <div className="w-14 h-14 bg-teal rounded-full flex items-center justify-center mb-4">
          <IconCheck size={28} className="text-white" strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-h3 font-bold text-navy mb-2">Message received.</h3>
        <p className="text-body text-charcoal/80">We will respond within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {status === 'error' && (
        <div className="bg-red/10 border border-red/30 rounded-brand px-4 py-3 text-body-sm text-red animate-fade-in">
          {errorMsg || 'Something went wrong. Please try again.'}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Name" error={errors.name?.message} required>
          <input
            {...register('name', { required: 'Name is required' })}
            className={`input ${errors.name ? 'input-error' : ''}`}
            placeholder="Rajesh Kumar"
          />
        </Field>
        <Field label="Organisation" error={errors.organisation?.message} required>
          <input
            {...register('organisation', { required: 'Organisation name is required' })}
            className={`input ${errors.organisation ? 'input-error' : ''}`}
            placeholder="Acme Technologies Pvt. Ltd."
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email address" error={errors.email?.message} required>
          <input
            type="email"
            {...register('email', {
              required: 'Email address is required',
              pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Enter a valid email address' }
            })}
            className={`input ${errors.email ? 'input-error' : ''}`}
            placeholder="rajesh@acmetechnologies.in"
          />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input
            type="tel"
            {...register('phone')}
            className="input"
            placeholder="+91 98765 43210 (optional)"
          />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message} required>
        <select
          {...register('subject', { required: 'Please select a subject' })}
          className={`input ${errors.subject ? 'input-error' : ''}`}
        >
          <option value="">Select a subject</option>
          <option value="Consulting Enquiry">Consulting Enquiry</option>
          <option value="Implementation Enquiry">Implementation Enquiry</option>
          <option value="Evaluation Assistance">Evaluation Assistance</option>
          <option value="Support Enquiry">Support Enquiry</option>
          <option value="Licence Enquiry">Licence Enquiry</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message} required>
        <textarea
          {...register('message', {
            required: 'Please enter a message',
            minLength: { value: 20, message: 'Message must be at least 20 characters' }
          })}
          className={`input h-auto ${errors.message ? 'input-error' : ''}`}
          rows={5}
          placeholder="Describe your enquiry — the more specific you are, the more useful our response will be."
        />
      </Field>

      <Button
        type="submit"
        variant="primary-light"
        disabled={status === 'loading'}
        className="w-full sm:w-auto"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Sending…
          </span>
        ) : 'Send Message'}
      </Button>

      <p className="text-caption text-muted">
        We respond to all enquiries within one business day, Monday to Friday.
      </p>
    </form>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LeadMagnetForm
// ─────────────────────────────────────────────────────────────────────────────
interface LeadMagnetInputs {
  name: string
  email: string
  organisation: string
}

interface LeadMagnetFormProps {
  resourceName?: string
  resourceType?: string
  submitLabel?: string
}

export function LeadMagnetForm({
  resourceName = 'DPDPA Readiness Checklist',
  resourceType = 'checklist',
  submitLabel,
}: LeadMagnetFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors } } = useForm<LeadMagnetInputs>()

  const onSubmit: SubmitHandler<LeadMagnetInputs> = async (data) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, resourceName }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-start gap-4 p-5 bg-teal-light rounded-brand border border-teal animate-fade-in">
        <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
          <IconMail size={20} className="text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-navy mb-0.5">{resourceName} on its way.</p>
          <p className="text-body-sm text-charcoal/80">Check your inbox. Check spam if it doesn't arrive within a few minutes.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {status === 'error' && (
        <p className="text-body-sm text-red bg-red/10 border border-red/30 rounded px-3 py-2">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-label font-medium text-charcoal mb-1.5">
            Name <span className="text-red">*</span>
          </label>
          <input
            {...register('name', { required: true })}
            className={`input ${errors.name ? 'input-error' : ''}`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-label font-medium text-charcoal mb-1.5">
            Work email <span className="text-red">*</span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: true,
              pattern: /^[^@]+@[^@]+\.[^@]+$/
            })}
            className={`input ${errors.email ? 'input-error' : ''}`}
            placeholder="you@yourcompany.in"
          />
        </div>
      </div>

      <div>
        <label className="block text-label font-medium text-charcoal mb-1.5">
          Organisation <span className="text-red">*</span>
        </label>
        <input
          {...register('organisation', { required: true })}
          className={`input ${errors.organisation ? 'input-error' : ''}`}
          placeholder="Organisation name"
        />
      </div>

      <Button type="submit" variant="primary-light" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Sending…
          </span>
        ) : (submitLabel ?? `Download ${resourceType === 'checklist' ? 'Free' : ''} ${resourceName} →`)}
      </Button>
    </form>
  )
}
