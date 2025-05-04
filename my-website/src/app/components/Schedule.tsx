'use client';

import { useEffect, useState } from 'react';

type Status = 'available' | 'partial' | 'booked';

interface ScheduleData {
  [key: string]: Status; // e.g., "2024-05": "available"
}

const statusLabels: Record<Status, string> = {
  available: 'Available',
  partial: 'Partial',
  booked: 'Unavailable',
};

const statusColors: Record<Status, string> = {
  available: 'bg-[var(--theme-color-4)]',
  partial: 'bg-[var(--theme-color-5)]',
  booked: 'bg-[var(--theme-color-1)]',
};

export default function Schedule({ scheduleData }: { scheduleData: ScheduleData }) {
  const [months, setMonths] = useState<{ name: string; status: Status }[]>([]);

  useEffect(() => {
    const list = Array.from({ length: 12 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() + i);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      return {
        name: date.toLocaleString('default', { month: 'short', year: 'numeric' }),
        status: scheduleData[key] ?? 'available',
      };
    });
    setMonths(list);
  }, [scheduleData]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {months.map(({ name, status }) => (
        <div
          key={name}
          className={`rounded-lg p-2 text-white shadow-md ${statusColors[status]}`}
        >
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-sm opacity-80">{statusLabels[status]}</div>
        </div>
      ))}
    </div>
  );
}
