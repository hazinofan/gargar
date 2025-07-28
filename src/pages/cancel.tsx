export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Paiement annulé</h1>
        <p className="text-gray-700">Votre transaction a été annulée. Vous pouvez réessayer à tout moment.</p>
      </div>
    </div>
  );
}
