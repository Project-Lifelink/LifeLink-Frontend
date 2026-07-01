import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  User,
  Mail,
  Phone,
  Droplet,
  Cake,
  Users,
  ShieldCheck,
  Lock,
  Bell,
  IdCard,
  Heart,
  CircleUser,
} from 'lucide-react'
import SettingsLayout from '../../components/settings/SettingsLayout.jsx'
import ProfileHeader from '../../components/settings/ProfileHeader.jsx'
import SettingsCard from '../../components/settings/SettingsCard.jsx'
import PreferencesCard from '../../components/settings/PreferencesCard.jsx'

/* ---- validation helpers (frontend-derived; backend has no schema yet) ---- */
const reqName = (v) => (String(v).trim().length < 2 ? 'Enter a valid name' : undefined)
const reqPhone = (v) => (!/^[+\d][\d\s-]{6,14}$/.test(String(v).trim()) ? 'Enter a valid phone number' : undefined)
const reqAge = (v) => {
  const n = Number(v)
  if (!Number.isFinite(n) || n < 16 || n > 100) return 'Age must be between 16 and 100'
  return undefined
}
const minPass = (v) => (String(v).length < 8 ? 'Use at least 8 characters' : undefined)

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((g) => ({ value: g, label: g }))
const SEXES = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
]

// Mock network latency so loading/disabled states are visible.
const mockLatency = () => new Promise((res) => setTimeout(res, 700))

const SECTIONS = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'personal', label: 'Personal Info', icon: Heart },
  { id: 'password', label: 'Password', icon: Lock },
  { id: 'account', label: 'Account', icon: ShieldCheck },
  { id: 'preferences', label: 'Preferences', icon: Bell },
]

export default function UserSettings() {
  const user = useSelector((state) => state.auth.user)

  // TODO(API): Fetch the current user settings when this page loads.
  // Expected: GET /api/v1/users/{id} (Authorization: Bearer <token>) returning
  // the user profile. Replace the Redux/mock initial values below with the
  // API response (and show a skeleton while loading).
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  })
  const [personal, setPersonal] = useState({
    blood_group: user?.bloodgroup || user?.blood_group || '',
    age: user?.age || '',
    sex: user?.sex || '',
  })
  const [prefs, setPrefs] = useState({
    email_requests: true,
    sms_alerts: false,
    push_notifications: true,
    donation_reminders: true,
  })

  const name = profile.name || 'Your Profile'
  const initials = (profile.name || 'U')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const memberSince = user?.created_at ? new Date(user.created_at).getFullYear() : '2026'

  /* ----------------------------- mock saves ----------------------------- */
  const saveProfile = async (draft) => {
    // TODO(API): Update the user's profile.
    // Expected: PATCH /api/v1/users/{id} with { name, phone } (email is immutable).
    // Send only changed fields; response returns the updated user. Replace the
    // mock below and surface backend validation errors inline.
    await mockLatency()
    setProfile((p) => ({ ...p, ...draft }))
  }

  const savePersonal = async (draft) => {
    // TODO(API): Update the user's personal/donation info.
    // Expected: PATCH /api/v1/users/{id} with { blood_group, age, sex }.
    // Replace the mock below with the real mutation.
    await mockLatency()
    setPersonal((p) => ({ ...p, ...draft }))
  }

  const changePassword = async (draft) => {
    // TODO(API): Change the user's password.
    // Expected: POST /api/v1/users/change-password with
    // { current_password, new_password }; expect 200 on success or a 400 with
    // a message for an incorrect current password. Replace the mock below.
    await mockLatency()
  }

  const savePrefs = async (draft) => {
    // TODO(API): Save notification/privacy preferences.
    // Expected: PATCH /api/v1/users/{id}/preferences with the boolean flags.
    // Replace the mock below with the real mutation.
    await mockLatency()
    setPrefs(draft)
  }

  return (
    <SettingsLayout
      title="Settings"
      subtitle="Manage your profile, donation details, and preferences."
      sections={SECTIONS}
    >
      <ProfileHeader
        name={name}
        subtitle={profile.email || 'No email on file'}
        initials={initials}
        icon={profile.name ? undefined : CircleUser}
        verified
        badges={[
          { label: 'Donor', icon: Heart, tone: 'bg-primary-50 text-primary' },
          personal.blood_group && { label: personal.blood_group, icon: Droplet, tone: 'bg-danger-soft text-danger' },
        ].filter(Boolean)}
        stats={[
          { label: 'Total donations', value: user?.totaldonation || '0' },
          { label: 'Member since', value: memberSince },
        ]}
      />

      {/* Profile */}
      <SettingsCard
        id="profile"
        title="Profile"
        description="Your identity on LifeLink."
        icon={User}
        values={profile}
        onSave={saveProfile}
        fields={[
          { name: 'name', label: 'Full Name', icon: User, required: true, validate: reqName, className: 'sm:col-span-2' },
          { name: 'email', label: 'Email Address', type: 'email', icon: Mail, immutable: true, helper: 'Email is your account identity and cannot be changed.', className: 'sm:col-span-2' },
          { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, required: true, validate: reqPhone, className: 'sm:col-span-2' },
        ]}
      />

      {/* Personal information */}
      <SettingsCard
        id="personal"
        title="Personal Information"
        description="Helps us match you with nearby blood requests."
        icon={Heart}
        values={personal}
        onSave={savePersonal}
        fields={[
          { name: 'blood_group', label: 'Blood Group', type: 'select', icon: Droplet, required: true, options: [{ value: '', label: 'Select blood group' }, ...BLOOD_GROUPS] },
          { name: 'sex', label: 'Gender', type: 'select', icon: Users, required: true, options: [{ value: '', label: 'Select gender' }, ...SEXES] },
          { name: 'age', label: 'Age', type: 'number', icon: Cake, required: true, validate: reqAge, className: 'sm:col-span-2' },
        ]}
      />

      {/* Password */}
      <SettingsCard
        id="password"
        title="Password"
        description="Keep your account secure."
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
        description="Your account status and role."
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
              <dt className="text-sm text-muted">Role</dt>
              <dd className="mt-1 flex items-center gap-1.5 text-[15px] font-medium text-ink">
                <IdCard className="h-4 w-4 text-faint" /> Blood Donor
              </dd>
            </div>
          </dl>
        }
      />

      {/* Preferences */}
      <PreferencesCard
        id="preferences"
        title="Notification Preferences"
        description="Choose how LifeLink keeps you informed."
        icon={Bell}
        values={prefs}
        onSave={savePrefs}
        items={[
          { name: 'email_requests', label: 'Email — Blood requests', desc: 'Get emailed when a matching request is raised nearby.' },
          { name: 'sms_alerts', label: 'SMS — Emergency alerts', desc: 'Critical, time-sensitive requests via text message.' },
          { name: 'push_notifications', label: 'Push notifications', desc: 'In-app and browser push updates.' },
          { name: 'donation_reminders', label: 'Donation reminders', desc: 'Gentle reminders when you become eligible to donate again.' },
        ]}
      />
    </SettingsLayout>
  )
}
