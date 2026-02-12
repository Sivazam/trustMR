"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import SectionHeader from "@/components/SectionHeader";
import { Heart, Shield, Check, CreditCard, Smartphone, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const donationAmounts = [500, 1000, 5000];

const whyDonate = [
  {
    icon: Shield,
    title: "Transparent Operations",
    description: "Complete transparency in how we use every donation",
  },
  {
    icon: Heart,
    title: "Ethical Use",
    description: "Funds used responsibly for intended purposes",
  },
  {
    icon: Check,
    title: "Accountability",
    description: "Regular reporting to donors and beneficiaries",
  },
];

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card">("upi");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { toast } = useToast();

  const handleDonate = () => {
    toast({
      title: "Thank You!",
      description: "Your donation request has been received. We will contact you shortly to complete the payment.",
    });
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Your Contribution Creates Real Impact"
          subtitle="Join us in making a difference. Every donation, big or small, helps transform lives."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {whyDonate.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-soft-xl transition-all duration-300 rounded-2xl border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-900/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-blue-900" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-blue-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-soft-2xl rounded-2xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
                <h2 className="font-serif text-2xl font-bold mb-2">Make a Donation</h2>
                <p className="text-blue-100">Choose your donation amount</p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <Label className="text-blue-900 font-semibold mb-3 block">
                      Select Amount (₹)
                    </Label>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3 mb-3">
                      {donationAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount.toString() ? "default" : "outline"}
                          onClick={() => {
                            setSelectedAmount(amount.toString());
                            setCustomAmount("");
                          }}
                          className={`rounded-xl transition-all text-sm sm:text-base py-3 sm:py-auto ${
                            selectedAmount === amount.toString()
                              ? "bg-amber-500 text-white hover:bg-amber-600"
                              : "hover:border-amber-500"
                          }`}
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-base sm:text-base">
                        ₹
                      </span>
                      <Input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount("");
                        }}
                        className="pl-10 rounded-xl py-3 text-base sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-blue-900 font-semibold mb-3 block">
                      Payment Method
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant={paymentMethod === "upi" ? "default" : "outline"}
                        onClick={() => setPaymentMethod("upi")}
                        className={`rounded-xl h-auto py-4 sm:py-6 ${
                          paymentMethod === "upi"
                            ? "bg-blue-900 text-white"
                            : "hover:border-blue-900"
                        }`}
                      >
                        <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold text-base sm:text-lg">UPI</div>
                          <div className="text-xs sm:text-sm opacity-80">GPay, PhonePe, Paytm</div>
                        </div>
                      </Button>
                      <Button
                        variant={paymentMethod === "card" ? "default" : "outline"}
                        onClick={() => setPaymentMethod("card")}
                        className={`rounded-xl h-auto py-4 sm:py-6 ${
                          paymentMethod === "card"
                            ? "bg-blue-900 text-white"
                            : "hover:border-blue-900"
                        }`}
                      >
                        <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold text-base sm:text-lg">Card</div>
                          <div className="text-xs sm:text-sm opacity-80">Credit / Debit</div>
                        </div>
                      </Button>
                    </div>
                  </div>

                  {paymentMethod === "upi" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-muted/50 rounded-xl p-4 sm:p-6 text-center"
                    >
                      <div className="w-40 h-40 sm:w-32 sm:h-32 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <QrCode className="h-20 w-20 sm:h-16 sm:w-16 text-blue-900" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Scan QR code with any UPI app
                      </p>
                      <p className="font-mono text-sm sm:text-base font-semibold text-blue-900 bg-white inline-block px-4 py-2 rounded-lg">
                        malladiramarao@upi
                      </p>
                    </motion.div>
                  )}

                  {paymentMethod === "card" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-4"
                    >
                      <div>
                        <Label className="text-base sm:text-base">Card Number</Label>
                        <Input placeholder="1234 5678 9012 3456" className="rounded-xl mt-1 py-3 text-base sm:text-base" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-base sm:text-base">Expiry Date</Label>
                          <Input placeholder="MM/YY" className="rounded-xl mt-1 py-3 text-base sm:text-base" />
                        </div>
                        <div>
                          <Label className="text-base sm:text-base">CVV</Label>
                          <Input placeholder="123" className="rounded-xl mt-1 py-3 text-base sm:text-base" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-soft-2xl rounded-2xl border-0 h-full">
              <CardContent className="p-6">
                <h2 className="font-serif text-2xl font-bold text-blue-900 mb-6">
                  Donor Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-base sm:text-base">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="rounded-xl mt-1 py-3 text-base sm:text-base"
                      disabled={isAnonymous}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base sm:text-base">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="rounded-xl mt-1 py-3 text-base sm:text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base sm:text-base">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="rounded-xl mt-1 py-3 text-base sm:text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base sm:text-base">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Any specific message or dedication..."
                      value={donorInfo.message}
                      onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                      className="rounded-xl mt-1 resize-none py-3 text-base sm:text-base"
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="anonymous"
                      checked={isAnonymous}
                      onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                    />
                    <Label
                      htmlFor="anonymous"
                      className="text-sm cursor-pointer"
                    >
                      Make this donation anonymous
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2 bg-blue-900/5 p-4 rounded-xl">
                    <Shield className="h-5 w-5 text-blue-900 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Your information is secure and will be used only for donation receipt and
                      communication purposes.
                    </p>
                  </div>

                  <Button
                    onClick={handleDonate}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                    Donate Now
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By donating, you agree to our terms of service and privacy policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-green-800/10 text-green-800 px-6 py-3 rounded-full">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">
              Transparent & Accountable Fund Usage
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
