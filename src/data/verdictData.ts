export interface VerdictItem {
  readonly id: string;
  readonly type: string;
  readonly amount: string;
  readonly image: string;
  readonly className: string;
}

export const verdictData: VerdictItem[] = [
  {
    id: 'truck',
    type: 'Truck',
    amount: '$250,000+',
    image: "https://c.animaapp.com/me11n5bffLhWIi/assets/Pickup_Truck.svg",
    className: "items-center bg-white box-border flex flex-col h-[204px] justify-center w-[263px]"
  },
  {
    id: 'suv',
    type: 'SUV',
    amount: '$175,000+',
    image: "https://c.animaapp.com/me11n5bffLhWIi/assets/SUV.svg",
    className: "items-center bg-sky-950 box-border flex flex-col h-[204px] justify-center w-[263px]"
  },
  {
    id: 'sedan',
    type: 'Sedan',
    amount: '$150,000+',
    image: "https://c.animaapp.com/me11n5bffLhWIi/assets/Sedan.svg",
    className: "items-center bg-white box-border flex flex-col h-[204px] justify-center w-[263px]"
  }
] as const;
