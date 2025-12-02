import React, { useState, useEffect } from 'react';
import { Calendar, Pill, Syringe, FileText, Search, Plus, X, AlertCircle, Clock, Activity } from 'lucide-react';

const VetMedicineApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // Dữ liệu mẫu - thuốc thú y
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Amoxicillin 500mg', type: 'Kháng sinh', unit: 'Viên', stock: 150, price: 5000, expiry: '2026-12-31', dosage: '10-20mg/kg', note: 'Dùng 2 lần/ngày' },
    { id: 2, name: 'Ivermectin 1%', type: 'Tẩy giun', unit: 'ml', stock: 50, price: 150000, expiry: '2025-08-15', dosage: '0.2mg/kg', note: 'Tiêm dưới da' },
    { id: 3, name: 'Dexamethasone', type: 'Chống viêm', unit: 'ml', stock: 30, price: 25000, expiry: '2025-10-20', dosage: '0.1-0.2mg/kg', note: 'Tiêm bắp' },
    { id: 4, name: 'Vitamin B Complex', type: 'Vitamin', unit: 'ml', stock: 80, price: 35000, expiry: '2026-03-15', dosage: '1-2ml', note: 'Tiêm bắp' },
  ]);

  // Dữ liệu mẫu - vật nuôi
  const [pets, setPets] = useState([
    { id: 1, name: 'Lucky', species: 'Chó', breed: 'Golden Retriever', age: 3, weight: 28, owner: 'Nguyễn Văn A', phone: '0901234567', allergies: 'Không' },
    { id: 2, name: 'Miu', species: 'Mèo', breed: 'Ba Tư', age: 2, weight: 4, owner: 'Trần Thị B', phone: '0912345678', allergies: 'Penicillin' },
    { id: 3, name: 'Max', species: 'Chó', breed: 'Poodle', age: 5, weight: 8, owner: 'Lê Văn C', phone: '0923456789', allergies: 'Không' },
  ]);

  // Dữ liệu mẫu - đơn thuốc
  const [prescriptions, setPrescriptions] = useState([
    { 
      id: 1, 
      petId: 1, 
      petName: 'Lucky', 
      date: '2024-12-01', 
      diagnosis: 'Viêm da',
      medicines: [
        { medicineId: 1, name: 'Amoxicillin 500mg', dosage: '500mg', frequency: '2 lần/ngày', duration: '7 ngày', quantity: 14 },
        { medicineId: 4, name: 'Vitamin B Complex', dosage: '2ml', frequency: '1 lần/ngày', duration: '5 ngày', quantity: 5 }
      ],
      vet: 'BS. Phạm Thị D',
      status: 'Đang điều trị'
    },
    { 
      id: 2, 
      petId: 2, 
      petName: 'Miu', 
      date: '2024-11-28', 
      diagnosis: 'Giun đũa',
      medicines: [
        { medicineId: 2, name: 'Ivermectin 1%', dosage: '0.8ml', frequency: '1 lần', duration: '1 ngày', quantity: 1 }
      ],
      vet: 'BS. Nguyễn Văn E',
      status: 'Hoàn thành'
    },
  ]);

  // Dashboard Statistics
  const stats = {
    totalMedicines: medicines.length,
    lowStock: medicines.filter(m => m.stock < 50).length,
    totalPets: pets.length,
    activePrescriptions: prescriptions.filter(p => p.status === 'Đang điều trị').length
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Tổng Quan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tổng Thuốc</p>
              <p className="text-2xl font-bold text-blue-600">{stats.totalMedicines}</p>
            </div>
            <Pill className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Thuốc Sắp Hết</p>
              <p className="text-2xl font-bold text-red-600">{stats.lowStock}</p>
            </div>
            <AlertCircle className="text-red-500" size={32} />
          </div>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Vật Nuôi</p>
              <p className="text-2xl font-bold text-green-600">{stats.totalPets}</p>
            </div>
            <Activity className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Đang Điều Trị</p>
              <p className="text-2xl font-bold text-purple-600">{stats.activePrescriptions}</p>
            </div>
            <Clock className="text-purple-500" size={32} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Thuốc Cần Bổ Sung</h3>
        <div className="space-y-2">
          {medicines.filter(m => m.stock < 50).map(med => (
            <div key={med.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium">{med.name}</p>
                <p className="text-sm text-gray-600">Còn lại: {med.stock} {med.unit}</p>
              </div>
              <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm">
                Cần nhập thêm
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMedicines = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Kho Thuốc</h2>
        <button
          onClick={() => { setModalType('medicine'); setShowAddModal(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Thêm Thuốc
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tên Thuốc</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Loại</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Liều Dùng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tồn Kho</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hạn Dùng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Giá</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ghi Chú</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {medicines.map(med => (
              <tr key={med.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{med.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                    {med.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{med.dosage}</td>
                <td className="px-6 py-4">
                  <span className={`font-medium ${med.stock < 50 ? 'text-red-600' : 'text-green-600'}`}>
                    {med.stock} {med.unit}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{med.expiry}</td>
                <td className="px-6 py-4 text-sm">{med.price.toLocaleString()}đ</td>
                <td className="px-6 py-4 text-sm text-gray-600">{med.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPets = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Vật Nuôi</h2>
        <button
          onClick={() => { setModalType('pet'); setShowAddModal(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Thêm Vật Nuôi
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets.map(pet => (
          <div key={pet.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
                <p className="text-sm text-gray-600">{pet.species} - {pet.breed}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {pet.age} tuổi
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Cân nặng:</span>
                <span className="font-medium">{pet.weight} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Chủ nuôi:</span>
                <span className="font-medium">{pet.owner}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Điện thoại:</span>
                <span className="font-medium">{pet.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dị ứng:</span>
                <span className={`font-medium ${pet.allergies !== 'Không' ? 'text-red-600' : ''}`}>
                  {pet.allergies}
                </span>
              </div>
            </div>
            
            <button className="mt-4 w-full bg-blue-50 text-blue-600 py-2 rounded hover:bg-blue-100">
              Xem Lịch Sử Điều Trị
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrescriptions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Đơn Thuốc</h2>
        <button
          onClick={() => { setModalType('prescription'); setShowAddModal(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Tạo Đơn Thuốc
        </button>
      </div>

      <div className="space-y-4">
        {prescriptions.map(rx => (
          <div key={rx.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Đơn thuốc #{rx.id} - {rx.petName}</h3>
                <p className="text-sm text-gray-600">Ngày: {rx.date} | Bác sĩ: {rx.vet}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                rx.status === 'Đang điều trị' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {rx.status}
              </span>
            </div>

            <div className="mb-4 p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Chẩn đoán:</p>
              <p className="font-medium">{rx.diagnosis}</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-gray-700">Danh sách thuốc:</p>
              {rx.medicines.map((med, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded">
                  <p className="font-medium">{med.name}</p>
                  <div className="text-sm text-gray-600 grid grid-cols-2 gap-2 mt-1">
                    <p>Liều: {med.dosage}</p>
                    <p>Tần suất: {med.frequency}</p>
                    <p>Thời gian: {med.duration}</p>
                    <p>Số lượng: {med.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Syringe size={32} />
              <div>
                <h1 className="text-2xl font-bold">Phần Mềm Quản Lý Thuốc Thú Y</h1>
                <p className="text-sm text-blue-100">Hệ thống quản lý chuyên nghiệp</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm">Phòng Khám Thú Y ABC</p>
              <p className="text-xs text-blue-100">Cần Thơ, Việt Nam</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            {[
              { id: 'dashboard', label: 'Tổng Quan', icon: Activity },
              { id: 'medicines', label: 'Kho Thuốc', icon: Pill },
              { id: 'pets', label: 'Vật Nuôi', icon: Calendar },
              { id: 'prescriptions', label: 'Đơn Thuốc', icon: FileText }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'medicines' && renderMedicines()}
        {activeTab === 'pets' && renderPets()}
        {activeTab === 'prescriptions' && renderPrescriptions()}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center py-4 mt-8">
        <p className="text-sm">© 2024 Phần Mềm Quản Lý Thuốc Thú Y - Phiên bản 1.0</p>
      </div>
    </div>
  );
};

export default VetMedicineApp;