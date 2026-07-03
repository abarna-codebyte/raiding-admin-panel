export interface FraudFlag {
  id: string
  entityType: 'Customer' | 'Partner'
  entityId: string
  entityName: string
  riskScore: number
  reason: string
  status: 'Under review' | 'Cleared' | 'Blocked'
}

export const FRAUD_FLAGS: FraudFlag[] = [
  { id: 'FRD-441', entityType: 'Partner', entityId: 'DRV581', entityName: 'Muthu Vel', riskScore: 82, reason: 'GPS spoofing detected on 3 trips', status: 'Under review' },
  { id: 'FRD-440', entityType: 'Customer', entityId: 'CUS1003', entityName: 'Meena Sundaram', riskScore: 76, reason: 'Repeated cancellations after driver assignment', status: 'Under review' },
  { id: 'FRD-439', entityType: 'Customer', entityId: 'CUS1008', entityName: 'Vignesh Thiagarajan', riskScore: 91, reason: 'Multiple accounts linked to same device', status: 'Blocked' },
  { id: 'FRD-438', entityType: 'Partner', entityId: 'DRV290', entityName: 'Selvakumar M.', riskScore: 34, reason: 'Unusual idle-time to trip-time ratio', status: 'Cleared' },
  { id: 'FRD-437', entityType: 'Customer', entityId: 'CUS1006', entityName: 'Rahul Krishnan', riskScore: 58, reason: 'Promo code abuse pattern flagged', status: 'Under review' },
]
