const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function getCategories() {
  const res = await fetch(`${API_BASE}/api/categories/`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.results || data;
}

export async function getCategory(slug: string) {
  const res = await fetch(`${API_BASE}/api/categories/${slug}/`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export async function getProducts(params?: {
  category?: string;
  subcategory?: string;
  featured?: boolean;
}) {
  const query = new URLSearchParams();
  if (params?.category) query.set('category', params.category);
  if (params?.subcategory) query.set('subcategory', params.subcategory);
  if (params?.featured) query.set('featured', 'true');

  const res = await fetch(`${API_BASE}/api/products/?${query}`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.results || data;
}

export async function getCatalogs() {
  const res = await fetch(`${API_BASE}/api/catalogs/`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.results || data;
}

export async function submitQuote(formData: {
  full_name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product_lines: string[];
  message: string;
}) {
  const res = await fetch(`${API_BASE}/api/quotes/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  return res.ok;
}