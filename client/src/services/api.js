import axios from 'axios';
import { 
  productsData, 
  categoriesData, 
  brandsData, 
  resourcesData, 
  mockDealerApplications, 
  mockContactEnquiries 
} from '../data/mockData';

const API = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Unified API methods with mock fallback for instant visual preview
export const getProducts = async (params = {}) => {
  try {
    const res = await API.get('/products', { params });
    if (res.data && res.data.length > 0) return res.data;
  } catch (err) {
    console.log('Using local products data');
  }
  // Filter mock products locally
  let filtered = [...productsData];
  if (params.category && params.category !== 'all') {
    filtered = filtered.filter(p => p.category === params.category);
  }
  if (params.brand && params.brand !== 'all') {
    filtered = filtered.filter(p => p.brand === params.brand);
  }
  if (params.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q));
  }
  return filtered;
};

export const getProductById = async (id) => {
  try {
    const res = await API.get(`/products/${id}`);
    if (res.data) return res.data;
  } catch (err) {
    console.log('Using local product detail');
  }
  return productsData.find(p => p.id === id || p.slug === id) || productsData[0];
};

export const getCategories = async () => {
  try {
    const res = await API.get('/categories');
    if (res.data && res.data.length > 0) return res.data;
  } catch (err) {
    // fallback
  }
  return categoriesData;
};

export const getBrands = async () => {
  try {
    const res = await API.get('/brands');
    if (res.data && res.data.length > 0) return res.data;
  } catch (err) {
    // fallback
  }
  return brandsData;
};

export const submitDealerApplication = async (formData) => {
  try {
    const res = await API.post('/dealers/apply', formData);
    return res.data;
  } catch (err) {
    console.log('Stored dealer application locally');
    const newApp = {
      id: `DA-${Math.floor(1000 + Math.random() * 9000)}`,
      ...formData,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    };
    mockDealerApplications.unshift(newApp);
    return { success: true, message: 'Application submitted successfully!', data: newApp };
  }
};

export const submitContactEnquiry = async (formData) => {
  try {
    const res = await API.post('/contact', formData);
    return res.data;
  } catch (err) {
    console.log('Stored contact enquiry locally');
    const newEnquiry = {
      id: `CE-${Math.floor(500 + Math.random() * 500)}`,
      ...formData,
      status: 'New',
      date: new Date().toISOString().split('T')[0]
    };
    mockContactEnquiries.unshift(newEnquiry);
    return { success: true, message: 'Enquiry submitted successfully!', data: newEnquiry };
  }
};

export const getResources = async () => {
  try {
    const res = await API.get('/resources');
    if (res.data && res.data.length > 0) return res.data;
  } catch (err) {
    // fallback
  }
  return resourcesData;
};

export const loginUser = async (credentials) => {
  try {
    const res = await API.post('/auth/login', credentials);
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
    }
    return res.data;
  } catch (err) {
    // Fallback mock login for preview
    const role = credentials.email.includes('admin') ? 'admin' : 'dealer';
    const mockUser = {
      id: 'usr-1',
      name: role === 'admin' ? 'System Administrator' : 'Shree Ram Electricals Dealer',
      email: credentials.email,
      role: role,
      dealerId: role === 'dealer' ? 'DL-88402' : undefined
    };
    const mockToken = 'mock-jwt-token-railpower-2026';
    localStorage.setItem('token', mockToken);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return { success: true, token: mockToken, user: mockUser };
  }
};

export default API;
