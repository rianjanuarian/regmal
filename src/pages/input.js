
 import 'semantic-ui-css/semantic.min.css';

import { useState } from 'react';
import { Form,FormField, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';

export default function Input() {

  const randomCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let randomLetters = '';
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      randomLetters += letters[randomIndex];
    }
    return randomLetters;
  };
  const [formData, setFormData] = useState({
       kode:randomCode(),
    name: '',
    provinsi: '',
    jumlah_jiwa: 0,
    kabupaten: '',
    kecamatan: '',
    kampung: '',
    anggota_keluarga: []
  });

  const handleChange = (event) => {
        const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const response = await fetch('/api/handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
   
      if (response.ok) {
      
        alert("data berhasil disimpan")
        
      } else {
        alert("data gagal disimpan")
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }

  };

   return (
    <Container>
      <Form onSubmit={handleSubmit} method='post'>
      <FormField>
          <label>Kode KK</label>
          <input
            placeholder='kode KK'
            name='kode'
            value={formData.kode}
            readOnly
          />
        </FormField>
        <FormField>
          <label>Nama KK</label>
          <input
            placeholder='Nama KK'
            name='name'
            value={formData.nama}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Provinsi</label>
          <input
            placeholder='Provinsi'
            name='provinsi'
            value={formData.provinsi}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Kabupaten</label>
          <input
            placeholder='Kabupaten'
            name='kabupaten'
            value={formData.kabupaten}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Kecamatan</label>
          <input
            placeholder='Kecamatan'
            name='kecamatan'
            value={formData.kecamatan}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Kampung</label>
          <input
            placeholder='Kampung'
            name='kampung'
            value={formData.kampung}
            onChange={handleChange}
          />
        </FormField>
        <Button type='submit'>Submit</Button>
        <Link href={'/'}>
        <Button>Cancel</Button></Link>
      </Form>
    </Container>
  );
}
