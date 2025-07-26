const API_URL = import.meta.env.VITE_API_URL;

// GET - Obtener todos los contactos
export async function fetchContacts() {
  try {
    console.log('🌐 Cargando contactos...');
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const contacts = await response.json();
    console.log('✅ Contactos cargados:', contacts.length);
    return contacts;
    
  } catch (error) {
    console.error('❌ Error al cargar contactos:', error);
    throw error;
  }
}

// POST - Crear nuevo contacto
export async function createContact(contactData) {
  try {
    console.log('🌐 Creando contacto...');
    // lógica para hacer el POST con los datos

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(contactData),
    })

    if(!response.ok){
      throw new Error(`Error ${response.status} : ${response.statusText}`)
    }

    console.log("Contacto creado");

    return await response.json();
    
  } catch (error) {
    console.error('❌ Error al crear contacto:', error);
    throw error;
  }
}

// PUT - Actualizar contacto
export async function updateContact(id, contactData) {
  try {
    console.log('🌐 Actualizando contacto...');
    
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const updatedContact = await response.json();
    console.log('✅ Contacto actualizado:', updatedContact);
    return updatedContact;

  } catch (error) {
    console.error('❌ Error al actualizar contacto:', error);
    throw error;
  }
}

// DELETE - Eliminar contacto
export async function deleteContact(id) {
  try {
    console.log(`🗑 Eliminando contacto con ID: ${id}`);

    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    console.log(`✅ Contacto con ID ${id} eliminado`);
    return true; // O devuelve algo si tu API responde con datos

  } catch (error) {
    console.error('❌ Error al eliminar contacto:', error);
    throw error;
  }
}