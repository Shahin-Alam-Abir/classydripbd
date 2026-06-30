import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

const badges = [
  { icon: Truck, title: 'দ্রুত শিপিং', desc: '২৪-৪৮ ঘন্টায় ডেলিভারি' },
  { icon: ShieldCheck, title: 'ক্যাশ অন ডেলিভারি', desc: 'পাওয়ার সময় পেমেন্ট' },
  { icon: RotateCcw, title: '১৪ দিন রিটার্ন', desc: 'সহজ এক্সচেঞ্জ পলিসি' },
  { icon: Headphones, title: '২৪/৭ সাপোর্ট', desc: 'ডেডিকেটেড কাস্টমার কেয়ার' },
];

export default function TrustBadges() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:divide-x divide-gray-100">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-4 py-6 px-4 md:px-8">
              <badge.icon className="h-8 w-8 text-black flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider">{badge.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
