export const metadata = {
  title: "Dashboard Manajemen UMKM Pangan",
};

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TradeEmpowermentPage() {
  const umkmData = [
    {
      id: "UMKM-001",
      name: "Tani Sejahtera",
      location: "Nias Selatan",
      category: "Hortikultura",
      status: "Active",
      revenue: "Rp 45.2M",
      products: ["Tomat", "Cabai", "Wortel"],
      lastShipment: "2 hari lalu",
      rating: 4.8,
    },
    {
      id: "UMKM-002",
      name: "Nelayan Mandiri",
      location: "Belawan",
      category: "Perikanan",
      status: "Active",
      revenue: "Rp 32.1M",
      products: ["Ikan Tuna", "Udang", "Cumi"],
      lastShipment: "1 hari lalu",
      rating: 4.6,
    },
    {
      id: "UMKM-003",
      name: "Padi Makmur",
      location: "Makassar",
      category: "Pangan Pokok",
      status: "Pending",
      revenue: "Rp 28.7M",
      products: ["Beras Merah", "Beras Putih"],
      lastShipment: "5 hari lalu",
      rating: 4.3,
    },
    {
      id: "UMKM-004",
      name: "Olahan Segar",
      location: "Tanjung Priok",
      category: "Hasil Olahan",
      status: "Active",
      revenue: "Rp 15.8M",
      products: ["Keripik", "Sambal", "Acar"],
      lastShipment: "Hari ini",
      rating: 4.9,
    },
  ];

  const shipmentData = [
    { week: "W-1", shipments: 1200, tonnage: 1800 },
    { week: "W-2", shipments: 1100, tonnage: 1650 },
    { week: "W-3", shipments: 1300, tonnage: 1950 },
    { week: "W-4", shipments: 1250, tonnage: 1875 },
    { week: "W-5", shipments: 1400, tonnage: 2100 },
    { week: "W-6", shipments: 1350, tonnage: 2025 },
    { week: "W-7", shipments: 1200, tonnage: 1800 },
    { week: "W-8", shipments: 1100, tonnage: 1650 },
    { week: "W-9", shipments: 1300, tonnage: 1950 },
    { week: "W-10", shipments: 1250, tonnage: 1875 },
    { week: "W-11", shipments: 1400, tonnage: 2100 },
    { week: "W-12", shipments: 1350, tonnage: 2025 },
  ];

  const coldChainData = [
    { status: "OK", percentage: 85, count: 127 },
    { status: "Breach", percentage: 15, count: 23 },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "shipment",
      message: "UMKM-001 mengirim 2 ton tomat ke Jakarta",
      time: "2 jam lalu",
      status: "completed",
    },
    {
      id: 2,
      type: "registration",
      message: "UMKM baru terdaftar: Tani Makmur (NTT)",
      time: "4 jam lalu",
      status: "pending",
    },
    {
      id: 3,
      type: "cold_chain",
      message: "Temperature breach terdeteksi di MH-002",
      time: "6 jam lalu",
      status: "alert",
    },
    {
      id: 4,
      type: "payment",
      message: "Pembayaran UMKM-002 berhasil diproses",
      time: "8 jam lalu",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(50,182,233,1)_100%)]">
      {/* Page Container */}
      <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-6 lg:px-8">
        {/* Top Bar / Title */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight text-[#0475bc]">
              Dashboard Manajemen UMKM Pangan
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Pilot Program: Pelabuhan Tanjung Priok • Week 14
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/70 px-3 py-1.5 text-xs font-medium text-black shadow-sm backdrop-blur-sm">
              Live view
            </div>
            <button className="rounded-lg bg-[#0475bc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0475bc]/90">
              + Tambah UMKM
            </button>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* KPIs Row */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              <Card className="cursor-pointer p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <div className="text-2xl font-bold text-[#0475bc]">1,248</div>
                <div className="text-sm text-black">Shipments (month)</div>
                <div className="text-xs font-medium text-green-600">+12% vs last month</div>
              </Card>
              <Card className="cursor-pointer p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <div className="text-2xl font-bold text-[#0475bc]">91%</div>
                <div className="text-sm text-black">Cold-Chain Compliance</div>
                <div className="text-xs text-black">(Temperature & chain intact)</div>
              </Card>
              <Card className="cursor-pointer p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <div className="text-2xl font-bold text-[#0475bc]">+34%</div>
                <div className="text-sm text-black">ETA Accuracy (avg)</div>
                <div className="text-xs text-black">vs baseline manual</div>
              </Card>
              <Card className="cursor-pointer p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <div className="text-2xl font-bold text-[#0475bc]">5,420</div>
                <div className="text-sm text-black">UMKM Onboarded</div>
                <div className="text-xs text-black">Target year 1: 12,000</div>
              </Card>
              <Card className="cursor-pointer p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <div className="text-lg font-bold text-green-600">Active</div>
                <div className="text-sm text-black">Status Pilot</div>
                <div className="text-xs text-black">Week 14</div>
              </Card>
            </div>
          </div>
        </div>

        {/* Charts and Data Section */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Shipments Chart */}
          <Card className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0475bc]">
                Shipments & Volume (last 12 weeks)
              </CardTitle>
              <p className="text-xs text-black">Updated: 8/30/2025, 10:31:09 PM</p>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50">
                <div className="text-center">
                  <div className="mb-2 text-4xl">📊</div>
                  <p className="text-sm text-black">Line Chart: Shipments (count) & Tonnage (MT)</p>
                  <p className="mt-1 text-xs text-black">W-1 to W-12 data visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cold Chain Health */}
          <Card className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0475bc]">
                Cold Chain Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50">
                <div className="text-center">
                  <div className="relative mx-auto mb-4 h-32 w-32">
                    <div className="absolute inset-0 rounded-full bg-green-200"></div>
                    <div
                      className="absolute inset-0 rounded-full bg-orange-200"
                      style={{
                        clipPath:
                          "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)",
                      }}
                    ></div>
                    <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#0475bc]">85%</div>
                        <div className="text-xs text-black">OK</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      <span>OK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                      <span>Breach</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-black">Temp breaches: 3 in last 7 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* UMKM Management Section */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* UMKM List */}
          <Card className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-[#0475bc]">
                  Daftar UMKM Terdaftar
                </CardTitle>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Cari UMKM..."
                    className="rounded-lg border border-gray-300 px-3 py-1 text-sm focus:ring-2 focus:ring-[#0475bc] focus:outline-none"
                  />
                  <button className="rounded-lg bg-[#0475bc] px-3 py-1 text-sm text-white">
                    Filter
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {umkmData.map((umkm, index) => (
                  <div
                    key={index}
                    className="cursor-pointer rounded-lg border border-gray-200 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md"
                  >
                    <div className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0475bc] text-sm font-bold text-white">
                          {umkm.id.split("-")[1]}
                        </div>
                        <div>
                          <h3 className="font-semibold text-black">{umkm.name}</h3>
                          <p className="text-sm text-black">
                            {umkm.location} • {umkm.category}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-black">{umkm.revenue}</div>
                          <div className="text-xs text-black">Revenue</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-black">{umkm.rating}⭐</div>
                          <div className="text-xs text-black">Rating</div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`rounded-full px-2 py-1 text-xs ${
                              umkm.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {umkm.status}
                          </div>
                          <div className="mt-1 text-xs text-black">{umkm.lastShipment}</div>
                        </div>
                        <button className="text-sm text-[#0475bc] hover:text-[#0475bc]/80">
                          Detail →
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {umkm.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="rounded bg-gray-100 px-2 py-1 text-xs text-black"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0475bc]">
                Aktivitas Terbaru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-50 hover:shadow-sm"
                  >
                    <div
                      className={`mt-2 h-2 w-2 rounded-full ${
                        activity.status === "completed"
                          ? "bg-green-500"
                          : activity.status === "pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm text-black">{activity.message}</p>
                      <p className="mt-1 text-xs text-black">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Management Tools */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Actions */}
          <Card className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0475bc]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button className="w-full rounded-lg p-3 text-left transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-50 hover:shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">📊</div>
                    <div>
                      <div className="text-sm font-medium text-black">Generate Report</div>
                      <div className="text-xs text-black">Export data UMKM</div>
                    </div>
                  </div>
                </button>
                <button className="w-full rounded-lg p-3 text-left transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-50 hover:shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">📧</div>
                    <div>
                      <div className="text-sm font-medium text-black">Send Notification</div>
                      <div className="text-xs text-black">Broadcast ke UMKM</div>
                    </div>
                  </div>
                </button>
                <button className="w-full rounded-lg p-3 text-left transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-50 hover:shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">💰</div>
                    <div>
                      <div className="text-sm font-medium text-black">Process Payment</div>
                      <div className="text-xs text-black">Bayar UMKM</div>
                    </div>
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0475bc]">
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-black">UMKM Satisfaction</span>
                    <span className="text-black">4.7/5</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "94%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-black">On-time Delivery</span>
                    <span className="text-black">89%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-blue-500" style={{ width: "89%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-black">Cold Chain Success</span>
                    <span className="text-black">91%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-purple-500" style={{ width: "91%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alerts & Notifications */}
          <Card className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0475bc]">
                Alerts & Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-red-50 p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-red-100 hover:shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-red-800">Temperature Alert</div>
                    <div className="text-xs text-red-600">MH-002: 8°C breach</div>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-yellow-50 p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-100 hover:shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-yellow-800">Payment Pending</div>
                    <div className="text-xs text-yellow-600">3 UMKM menunggu pembayaran</div>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-blue-50 p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-100 hover:shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-800">New Registration</div>
                    <div className="text-xs text-blue-600">5 UMKM baru mendaftar</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#0475bc]">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-gray-50">
                  <span className="text-sm text-black">API Gateway</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-gray-50">
                  <span className="text-sm text-black">Database</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-gray-50">
                  <span className="text-sm text-black">Cold Chain IoT</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-gray-50">
                  <span className="text-sm text-black">Payment Gateway</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span className="text-xs text-yellow-600">Maintenance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
