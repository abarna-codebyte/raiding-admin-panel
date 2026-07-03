import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AuthLayout } from '@/layouts/AuthLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { PageLoader } from './PageLoader'

const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/features/auth/pages/RegisterPage'))
const RegisterSuccessPage = lazy(() => import('@/features/auth/pages/RegisterSuccessPage'))

const DashboardPage = lazy(() => import('@/features/dashboard/DashboardPage'))
const OperationsPage = lazy(() => import('@/features/operations/OperationsPage'))
const RidesPage = lazy(() => import('@/features/rides/RidesPage'))
const CustomersPage = lazy(() => import('@/features/customers/CustomersPage'))
const PartnersPage = lazy(() => import('@/features/partners/PartnersPage'))
const VerificationPage = lazy(() => import('@/features/verification/VerificationPage'))
const SosPage = lazy(() => import('@/features/sos/SosPage'))
const SupportPage = lazy(() => import('@/features/support/SupportPage'))
const FinancePage = lazy(() => import('@/features/finance/FinancePage'))
const MarketingPage = lazy(() => import('@/features/marketing/MarketingPage'))
const AnalyticsPage = lazy(() => import('@/features/analytics/AnalyticsPage'))
const FraudPage = lazy(() => import('@/features/fraud/FraudPage'))
const AuditPage = lazy(() => import('@/features/audit/AuditPage'))
const RolesPage = lazy(() => import('@/features/roles/RolesPage'))
const SettingsPage = lazy(() => import('@/features/settings/SettingsPage'))

function withSuspense(Component: React.LazyExoticComponent<React.ComponentType<any>>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/login" replace /> },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: withSuspense(LoginPage) },
      { path: '/register', element: withSuspense(RegisterPage) },
      { path: '/register/success', element: withSuspense(RegisterSuccessPage) },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/app',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Navigate to="/app/dashboard" replace /> },
          { path: 'dashboard', element: withSuspense(DashboardPage) },
          { path: 'operations', element: withSuspense(OperationsPage) },
          { path: 'rides', element: withSuspense(RidesPage) },
          { path: 'customers', element: withSuspense(CustomersPage) },
          { path: 'partners', element: withSuspense(PartnersPage) },
          { path: 'verification', element: withSuspense(VerificationPage) },
          { path: 'sos', element: withSuspense(SosPage) },
          { path: 'support', element: withSuspense(SupportPage) },
          { path: 'finance', element: withSuspense(FinancePage) },
          { path: 'marketing', element: withSuspense(MarketingPage) },
          { path: 'analytics', element: withSuspense(AnalyticsPage) },
          { path: 'fraud', element: withSuspense(FraudPage) },
          { path: 'audit', element: withSuspense(AuditPage) },
          { path: 'roles', element: withSuspense(RolesPage) },
          { path: 'settings', element: withSuspense(SettingsPage) },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to="/login" replace /> },
])
