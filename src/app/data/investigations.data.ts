export const INVESTIGATIONS_ARR = [
  {
    investId: 1,
    name: 'تحقيقات جارية',
  },
  {
    investId: 11,
    name: 'جوازات حديثة',
    investParentId: 1,
  },
  {
    investId: 111,
    name: 'قيد العمل',
    investParentId: 11,
  },
  {
    investId: 112,
    name: 'لم يتم البدء',
    investParentId: 11,
  },
  {
    investId: 12,
    name: 'تجديد',
    investParentId: 1,
  },
  {
    investId: 121,
    name: 'تم التجديد',
    investParentId: 12,
  },
  {
    investId: 122,
    name: 'نقص في الوثائق',
    investParentId: 12,
  },
  {
    investId: 2,
    name: 'تحقيقات منتهية',
  },
  {
    investId: 21,
    name: 'وثائق صالحة',
    investParentId: 2,
  },
  {
    investId: 211,
    name: 'تم التصديق',
    investParentId: 21,
  },
  {
    investId: 212,
    name: 'قيد العمل',
    investParentId: 21,
  },
  {
    investId: 22,
    name: 'وثائق غير مطابقة',
    investParentId: 2,
  },
  {
    investId: 221,
    name: 'طلب إعادة',
    investParentId: 22,
  },
  {
    investId: 222,
    name: 'مرفوضة',
    investParentId: 22,
  },
];
