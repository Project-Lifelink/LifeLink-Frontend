import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  Landmark,
  Map,
  Hash,
  Lock,
  Bell,
  ShieldCheck,
  Navigation,
} from 'lucide-react'
import SettingsLayout from '../../../components/settings/SettingsLayout.jsx'
import ProfileHeader from '../../../components/settings/ProfileHeader.jsx'
import SettingsCard from '../../../components/settings/SettingsCard.jsx'
import PreferencesCard from '../../../components/settings/PreferencesCard.jsx'

/* ---- validation helpers (frontend-derived; backend has no schema yet) ---- */
const reqText = (label) => (v) => (String(v).trim().length < 2 ? `Enter a valid ${label.toLowerCase()}` : undefined)
const reqPhone = (v) => (!/^[+\d][\d\s-]{6,14}$/.test(String(v).trim()) ? 'Enter a valid phone number' : undefined)
const optPhone = (v) => (v && !/^[+\d][\d\s-]{6,14}$/.test(String(v).trim()) ? 'Enter a valid phone number' : undefined)
const reqPin = (v) => (!/^\d{6}$/.test(String(v).trim()) ? 'PIN code must be 6 digits' : undefined)
const optUrl = (v) => (v && !/^https?:\/\/.+\..+/.test(String(v).trim()) ? 'Enter a valid URL (https://…)' : undefined)
const minPass = (v) => (String(v).length < 8 ? 'Use at least 8 characters' : undefined)

const TYPES = [
  { value: '', label: 'Select type' },
  { value: 'Private', label: 'Private' },
  { value: 'Government', label: 'Government' },
]

const mockLatency = () => new Promise((res) => setTimeout(res, 700))

const SECTIONS = [
  { id: 'profile', label: 'Profile', icon: Building2 },
  { id: 'contact', label: 'Contact', icon: Phone },
  { id: 'address', label: 'Address', icon: MapPin },
  { id: 'location', label: 'Location', icon: Navigation },
  { id: 'password', label: 'Password', icon: Lock },
  { id: 'account', label: 'Account', icon: ShieldCheck },
  { id: 'preferences', label: 'Preferences', icon: Bell },
]

export default function HospitalSettings() {
  const hospital = useSelector((state) => state.auth.user)

  // TODO(API): Fetch the current hospital settings when this page loads.
  // Expected: GET /api/v1/hospitals/{id} (Authorization: Bearer <token>).
  // Replace the Redux/mock initial values below with the API response.
  const [profile, setProfile] = useState({
    name: hospital?.name || '',
    type: hospital?.type || '',
    email: hospital?.email || '',
    phone: hospital?.phone || '',
  })
  const [contact, setContact] = useState({
    alternative_phone1: hospital?.alternative_phone1 || '',
    alternative_phone2: hospital?.alternative_phone2 || '',
    site: hospital?.site || '',
  })
  const [address, setAddress] = useState({
    address: hospital?.address || '',
    district: hospital?.district || '',
    city: hospital?.city || '',
    state: hospital?.state || '',
    zipcode: hospital?.zipcode || '',
  })
  const [prefs, setPrefs] = useState({
    email_requests: true,
    sms_alerts: true,
    push_notifications: true,
    weekly_summary: false,
  })

  const location = {
    longitude: hospital?.longitude ?? '—',
    latitude: hospital?.latitude ?? '—',
    geohash_64_bits: hospital?.geohash_64_bits || '—',
  }

  const name = profile.name || 'Your Hospital'
  const memberSince = hospital?.created_at ? new Date(hospital.created_at).getFullYear() : '2026'

  /* ----------------------------- mock saves ----------------------------- */
  const saveProfile = async (draft) => {
    // TODO(API): Update hospital profile.
    // Expected: PATCH /api/v1/hospitals/{id} with { name, type, phone }
    // (email immutable). Send only changed fields; replace the mock below.
    await mockLatency()
    setProfile((p) => ({ ...p, ...draft }))
  }

  const saveContact = async (draft) => {
    // TODO(API): Update hospital contact details.
    // Expected: PATCH /api/v1/hospitals/{id} with
    // { alternative_phone1, alternative_phone2, site }. Replace the mock below.
    await mockLatency()
    setContact((c) => ({ ...c, ...draft }))
  }

  const saveAddress = async (draft) => {
    // TODO(API): Update hospital address. Expected: PATCH /api/v1/hospitals/{id}
    // with { address, district, city, state, zipcode }. The backend should
    // re-derive longitude/latitude/geohash_64_bits from the new address; the
    // response returns the updated record. Replace the mock below.
    await mockLatency()
    setAddress((a) => ({ ...a, ...draft }))
  }

  const changePassword = async () => {
    // TODO(API): Change hospital password.
    // Expected: POST /api/v1/hospitals/change-password with
    // { current_password, new_password }; 200 on success, 400 with a message
    // for an incorrect current password. Replace the mock below.
    await mockLatency()
  }

  const savePrefs = async (draft) => {
    // TODO(API): Save hospital notification preferences.
    // Expected: PATCH /api/v1/hospitals/{id}/preferences with the boolean flags.
    await mockLatency()
    setPrefs(draft)
  }

  return (
    <SettingsLayout
      title="Hospital Settings"
      subtitle="Manage your hospital profile, contact details, and address."
      sections={SECTIONS}
    >
      <ProfileHeader
        name={name}
        subtitle={profile.email || 'No email on file'}
        icon={Building2}
        verified
        badges={[
          { label: 'Hospital', icon: Building2, tone: 'bg-primary-50 text-primary' },
          profile.type && { label: profile.type, icon: Landmark, tone: 'bg-info-soft text-info' },
        ].filter(Boolean)}
        stats={[
          { label: 'City', value: address.city || '—' },
          { label: 'Member since', value: memberSince },
        ]}
      />

      {/* Profile */}
      <SettingsCard
        id="profile"
        title="Hospital Profile"
        description="Your hospital's identity on LifeLink."
        icon={Building2}
        values={profile}
        onSave={saveProfile}
        fields={[
          { name: 'name', label: 'Hospital Name', icon: Building2, required: true, validate: reqText('Name'), className: 'sm:col-span-2' },
          { name: 'type', label: 'Type', type: 'select', icon: Landmark, required: true, options: TYPES },
          { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, required: true, validate: reqPhone },
          { name: 'email', label: 'Official Email', type: 'email', icon: Mail, immutable: true, helper: 'Email is your account identity and cannot be changed.', className: 'sm:col-span-2' },
        ]}
      />

      {/* Contact */}
      <SettingsCard
        id="contact"
        title="Contact & Web"
        description="Alternative numbers and your website."
        icon={Phone}
        values={contact}
        onSave={saveContact}
        fields={[
          { name: 'alternative_phone1', label: 'Alternative Phone 1', type: 'tel', icon: Phone, validate: optPhone },
          { name: 'alternative_phone2', label: 'Alternative Phone 2', type: 'tel', icon: Phone, validate: optPhone },
          { name: 'site', label: 'Website', type: 'text', icon: Globe, validate: optUrl, placeholder: 'https://…', className: 'sm:col-span-2' },
        ]}
      />

      {/* Address */}
      <SettingsCard
        id="address"
        title="Address"
        description="Where your hospital is located."
        icon={MapPin}
        values={address}
        onSave={saveAddress}
        fields={[
          { name: 'address', label: 'Street Address', type: 'textarea', required: true, validate: reqText('Address'), className: 'sm:col-span-2' },
          { name: 'district', label: 'District', icon: Map, required: true, validate: reqText('District') },
          { name: 'city', label: 'City', icon: MapPin, required: true, validate: reqText('City') },
          { name: 'state', label: 'State', icon: Map, required: true, validate: reqText('State') },
          { name: 'zipcode', label: 'PIN Code', type: 'text', icon: Hash, required: true, validate: reqPin },
        ]}
      />

      {/* Location (read-only / system-derived) */}
      <SettingsCard
        id="location"
        title="Location Coordinates"
        description="Derived automatically from your address."
        icon={Navigation}
        editable={false}
        viewSummary={
          <dl className="grid gap-5 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-muted">Latitude</dt>
              <dd className="mt-1 font-mono text-[15px] font-medium text-ink">{location.latitude}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Longitude</dt>
              <dd className="mt-1 font-mono text-[15px] font-medium text-ink">{location.longitude}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Geohash</dt>
              <dd className="mt-1 truncate font-mono text-[15px] font-medium text-ink">{location.geohash_64_bits}</dd>
            </div>
          </dl>
        }
      />

      {/* Password */}
      <SettingsCard
        id="password"
        title="Password"
        description="Keep your hospital account secure."
        icon={Lock}
        clearDraftOnSave
        onSave={changePassword}
        values={{ current_password: '', new_password: '', confirm_password: '' }}
        viewSummary={
          <div className="flex items-center justify-between rounded-2xl border border-line bg-canvas px-5 py-4">
            <div className="flex items-center gap-3">
              <Lock className="h-4 w-4 text-faint" />
              <span className="tracking-[0.3em] text-ink">••••••••</span>
            </div>
            <span className="text-sm text-muted">Last changed —</span>
          </div>
        }
        fields={[
          { name: 'current_password', label: 'Current Password', type: 'password', icon: Lock, required: true, className: 'sm:col-span-2' },
          { name: 'new_password', label: 'New Password', type: 'password', icon: Lock, required: true, validate: minPass },
          { name: 'confirm_password', label: 'Confirm New Password', type: 'password', icon: Lock, required: true, validate: (v, d) => (v !== d.new_password ? 'Passwords do not match' : undefined) },
        ]}
      />

      {/* Account status (read-only) */}
      <SettingsCard
        id="account"
        title="Account"
        description="Your registration and verification status."
        icon={ShieldCheck}
        editable={false}
        viewSummary={
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">Account Status</dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1 text-sm font-medium text-success">
                <ShieldCheck className="h-3.5 w-3.5" /> Active
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Verification</dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-info-soft px-2.5 py-1 text-sm font-medium text-info">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified Partner
              </dd>
            </div>
          </dl>
        }
      />

      {/* Preferences */}
      <PreferencesCard
        id="preferences"
        title="Notification Preferences"
        description="Choose how LifeLink keeps your team informed."
        icon={Bell}
        values={prefs}
        onSave={savePrefs}
        items={[
          { name: 'email_requests', label: 'Email — Request activity', desc: 'Updates when donors respond to your requests.' },
          { name: 'sms_alerts', label: 'SMS — Critical alerts', desc: 'Time-sensitive donor and emergency alerts via text.' },
          { name: 'push_notifications', label: 'Push notifications', desc: 'In-app and browser push updates.' },
          { name: 'weekly_summary', label: 'Weekly summary', desc: 'A digest of requests, donations, and inventory.' },
        ]}
      />
    </SettingsLayout>
  )
}
