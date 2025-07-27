import { useState } from "react";
import Image from "next/image";

const steps = ["Donate", "Details", "Payment"] as const;
type Step = (typeof steps)[number];

export default function DonatePage() {
  const amounts = [35, 50, 100, 250, 500, 1000, 1750] as const;

  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);
  const [selected, setSelected] = useState<number | "other">(250);
  const [otherValue, setOtherValue] = useState("");
  const [coverFee, setCoverFee] = useState(false);
  const [recurring, setRecurring] = useState(false);
  const [becomeMember, setBecomeMember] = useState(false);

  // Contact fields for step 2
  const [contact, setContact] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const donation = selected === "other" ? parseFloat(otherValue) || 0 : selected;
  const taxCredit = (donation * 0.75).toFixed(2);

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* Form Section - Now on the left */}
      <div className="lg:w-1/3 bg-white shadow-xl p-8 flex flex-col text-[#0F2345]">
        {/* Header & Steps */}
        <h2 className="text-2xl font-bold text-[#0F2345] mb-2">
          SUPPORT YOUR CONSERVATIVE TEAM
        </h2>
        <div className="flex items-center justify-between mb-6">
          {steps.map((label, i) => (
            <div key={label} className="flex-1 text-center relative">
              <div
                className={`mx-auto w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  i === currentStep
                    ? "bg-[#49a0a7] border-[#49a0a7] text-white"
                    : "border-gray-400 text-gray-600"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`block mt-1 text-xs ${
                  i === currentStep ? "text-[#49a0a7]" : "text-gray-500"
                }`}
              >
                {label}
              </span>
              {i < steps.length - 1 && (
                <div className="absolute top-4 right-0 w-1/3 h-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto">
          {currentStep === 0 && (
            <>
              {/* Amount Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelected(amt)}
                    className={`py-3 rounded-lg font-semibold ${
                      selected === amt
                        ? "bg-[#49a0a7] text-white"
                        : "bg-[#0F2345] text-white hover:bg-[#123] transition"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
                <button
                  onClick={() => setSelected("other")}
                  className={`py-3 rounded-lg font-semibold ${
                    selected === "other"
                      ? "bg-gray-100 text-[#0F2345] border-2 border-[#0F2345]"
                      : "bg-gray-100 text-gray-600 border-2 border-gray-300 hover:border-gray-400 transition"
                  }`}
                >
                  Other
                </button>
              </div>
              {selected === "other" && (
                <input
                  type="number"
                  placeholder="$"
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg text-[#0F2345] placeholder-gray-400"
                />
              )}
              {/* Checkbox */}
              <label className="flex items-start bg-gray-100 p-4 rounded-lg mb-3 border border-gray-300">
                <input
                  type="checkbox"
                  checked={becomeMember}
                  onChange={() => setBecomeMember((m) => !m)}
                  className="mr-3 mt-1 accent-[#49a0a7]"
                />
                <span className="text-[#0F2345]">Become a member?</span>
              </label>
            </>
          )}

          {currentStep === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {(
                ["title", "firstName", "lastName", "email", "phone"] as const
              ).map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={
                    field === "title"
                      ? "Title"
                      : field === "phone"
                      ? "Phone"
                      : field.replace(/([A-Z])/g, " $1")
                  }
                  value={(contact as any)[field]}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, [field]: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#0F2345] placeholder-gray-400"
                />
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center text-gray-600">
              <p>Here you'd collect credit card info via your gateway's SDK.</p>
            </div>
          )}
        </div>

        {/* Tax Credit (only on first step) */}
        {currentStep === 0 && donation > 0 && (
          <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
            Your donation of ${donation.toFixed(2)} is eligible for a tax credit
            up to ${taxCredit}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {currentStep > 0 ? (
            <button
              onClick={() =>
                setCurrentStep((s) => (s > 0 ? ((s - 1) as 0 | 1 | 2) : s))
              }
              className="px-6 py-3 bg-[#0F2345] text-white rounded-lg hover:bg-[#123] transition"
            >
              Back
            </button>
          ) : (
            <div className="w-24" />
          )}

          <button
            onClick={() =>
              setCurrentStep((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : s))
            }
            disabled={
              currentStep === 0 && donation <= 0
                ? true
                : currentStep === 1 &&
                  (!contact.firstName || !contact.lastName || !contact.email)
            }
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              currentStep === 2
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#0F2345] text-white hover:bg-[#123]"
            }`}
          >
            {currentStep < 2 ? "Next" : "Finish"}
          </button>
        </div>
      </div>

      {/* Image Section - now on the right with no overlay */}
      <div className="lg:w-2/3 relative h-64 lg:h-auto">
        <Image
          src="/assets/14715617_10210085962806229_5622527816333749007_o_edited.jpg"
          alt="Rally background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}