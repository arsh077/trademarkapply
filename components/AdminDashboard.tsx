import React, { useState, useEffect } from 'react';
import { LogOut, Users, Mail, Phone, Calendar, Trash2, Download, Search, Filter, RefreshCw } from 'lucide-react';
import { db } from '../firebase.config';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  date: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [loading, setLoading] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const leadsData: Lead[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        leadsData.push({
          id: doc.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message || `Business: ${data.businessName}, Brand: ${data.brandName}, Type: ${data.businessType}`,
          date: data.createdAt
        });
      });
      
      setLeads(leadsData);
    } catch (error) {
      console.error('Error fetching leads:', error);
      // Fallback to localStorage
      const savedLeads = localStorage.getItem('trademarkLeads');
      if (savedLeads) {
        setLeads(JSON.parse(savedLeads));
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const deleteLead = async (id: string) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      try {
        // Delete from Firestore
        await deleteDoc(doc(db, 'leads', id));
        
        // Update local state
        const updatedLeads = leads.filter(lead => lead.id !== id);
        setLeads(updatedLeads);
        
        // Also update localStorage
        localStorage.setItem('trademarkLeads', JSON.stringify(updatedLeads));
      } catch (error) {
        console.error('Error deleting lead:', error);
        alert('Error deleting lead. Please try again.');
      }
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Service', 'Message', 'Date'];
    const csvData = leads.map(lead => [
      lead.name,
      lead.email,
      lead.phone,
      lead.service,
      lead.message || '',
      lead.date
    ]);
    
    const csv = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.phone.includes(searchTerm);
    const matchesFilter = filterService === 'all' || lead.service === filterService;
    return matchesSearch && matchesFilter;
  });

  const services = ['Trademark Registration', 'Logo Design', 'Legal Consultation', 'Opposition Handling', 'Renewal Services', 'Copyright Registration'];

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      {/* Header */}
      <header className="glass-panel border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-white/60 text-sm font-mono uppercase tracking-wider">TrademarkApply Leads</p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors border border-red-500/50"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <Users className="text-secondary" size={24} />
              <span className="text-2xl font-bold">{leads.length}</span>
            </div>
            <p className="text-white/60 text-sm font-mono uppercase tracking-wider">Total Leads</p>
          </div>
          
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="text-blue-400" size={24} />
              <span className="text-2xl font-bold">
                {leads.filter(l => new Date(l.date).toDateString() === new Date().toDateString()).length}
              </span>
            </div>
            <p className="text-white/60 text-sm font-mono uppercase tracking-wider">Today</p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <Mail className="text-green-400" size={24} />
              <span className="text-2xl font-bold">
                {leads.filter(l => new Date(l.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
              </span>
            </div>
            <p className="text-white/60 text-sm font-mono uppercase tracking-wider">This Week</p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <Phone className="text-purple-400" size={24} />
              <span className="text-2xl font-bold">
                {leads.filter(l => new Date(l.date).getMonth() === new Date().getMonth()).length}
              </span>
            </div>
            <p className="text-white/60 text-sm font-mono uppercase tracking-wider">This Month</p>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-panel p-6 rounded-xl mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-secondary/50 focus:outline-none"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-secondary/50 focus:outline-none appearance-none cursor-pointer"
              >
                <option value="all">All Services</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-secondary hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold transition-colors"
            >
              <Download size={18} />
              Export CSV
            </button>
            
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-colors disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-mono uppercase tracking-wider text-white/80">Name</th>
                  <th className="text-left px-6 py-4 text-sm font-mono uppercase tracking-wider text-white/80">Email</th>
                  <th className="text-left px-6 py-4 text-sm font-mono uppercase tracking-wider text-white/80">Phone</th>
                  <th className="text-left px-6 py-4 text-sm font-mono uppercase tracking-wider text-white/80">Service</th>
                  <th className="text-left px-6 py-4 text-sm font-mono uppercase tracking-wider text-white/80">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-mono uppercase tracking-wider text-white/80">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-white/60">
                      <RefreshCw className="animate-spin inline-block mr-2" size={20} />
                      Loading leads...
                    </td>
                  </tr>
                ) : filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-white/60">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white">{lead.name}</td>
                      <td className="px-6 py-4 text-white/80">{lead.email}</td>
                      <td className="px-6 py-4 text-white/80">{lead.phone}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-mono">
                          {lead.service}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60 text-sm">
                        {new Date(lead.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Delete lead"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
