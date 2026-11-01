export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            منصة الفادور للخدمات التشغيلية
          </h1>

          <h2 className="text-2xl text-gray-700">
            ALFADOOR Operations Portal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">طلب خدمة</h3>
            <p>تقديم طلب خدمة للسلامة أو الأمن أو الصيانة.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">تقديم بلاغ</h3>
            <p>بلاغ حادث أو ملاحظة أو حالة طارئة.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">زيارة مصنع</h3>
            <p>طلب زيارة المصنع ومتابعة حالة الطلب.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">اقتراح تحسين</h3>
            <p>إرسال المقترحات التطويرية والتحسينية.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">متابعة الطلب</h3>
            <p>الاستعلام عن حالة الطلب باستخدام الرقم المرجعي.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">دخول المصرح لهم</h3>
            <p>دخول لوحات السلامة والأمن والصيانة والإدارة.</p>
          </div>
        </div>
      </div>
    </main>
  );
}