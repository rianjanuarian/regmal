
// import 'semantic-ui-css/semantic.min.css';

// import { useState } from 'react';
// import { FormField, Button, Form, Container } from 'semantic-ui-react';
// import { useRouter } from 'next/router';
// import savedata from './api/savedata';
// import Family from './api/model';
// const InputForm = () => {
//     const router = useRouter();
// //   const [formData, setFormData] = useState({
// //     kode:'',
// //     nama: '',
// //     provinsi: '',
// //     kabupaten: '',
// //     kecamatan: '',
// //     kampung: '',
// //     anggota_keluarga: []
// //   });
//   const [kode, setKode] = useState("")
//   const [nama, setNama] = useState('')
//   const [provinsi, setProvinsi] = useState('')
//   const [kabupaten, setKabupaten] = useState('')
//   const [kecamatan, setKecamatan] = useState('')
//   const [kampung, setKampung] = useState('')
//   const [anggota_keluarga, setAnggota_keluarga] = useState([])


// const handleSubmits = async(e) => {
// e.preventDefault();
// savedata({kode,nama,provinsi,kabupaten,kecamatan,kampung,anggota_keluarga})
// }
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('/api/submitdata', {
        
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Gagal menyimpan data.');
//       }
//       router.push('/')
//       alert('Data berhasil disimpan!');
//     } catch (error) {
//       console.error(error);
//       alert('Gagal menyimpan data.');
//     }
//   };


//   return (
//     <Container>
//       <Form action={Family.create()} method='post'>
//         <FormField>
//           <label>Nama KK</label>
//           <input
//             placeholder='Nama KK'
//             name='nama'
            
            
//           />
//         </FormField>
//         <FormField>
//           <label>Provinsi</label>
//           <input
//             placeholder='Provinsi'
//             name='provinsi'
        
         
//           />
//         </FormField>
//         <FormField>
//           <label>Kabupaten</label>
//           <input
//             placeholder='Kabupaten'
//             name='kabupaten'
        
//           />
//         </FormField>
//         <FormField>
//           <label>Kecamatan</label>
//           <input
//             placeholder='Kecamatan'
//             name='kecamatan'
            
          
//           />
//         </FormField>
//         <FormField>
//           <label>Kampung</label>
//           <input
//             placeholder='Kampung'
//             name='kampung'
                    
//           />
//         </FormField>
//         <Button type='submit'>Submit</Button>
//       </Form>
//     </Container>
//   );
// };

// export default InputForm;
import { useState } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

export default function Input() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    kode: '',
    nama: '',
    jumlah_jiwa: '',
    // Tambahkan field lainnya sesuai kebutuhan
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { ...formData };

    try {
      const filePath = path.join(process.cwd(), 'data.json');
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const existingData = JSON.parse(jsonData);

      existingData.kk.push(newData);
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

      alert('Data berhasil disimpan!');
      router.push('/');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Gagal menyimpan data.');
    }
  };

  return (
    <Container>
      <h1>Input Data Keluarga</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Kode</label>
          <input
            placeholder="Kode"
            name="kode"
            value={formData.kode}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Nama</label>
          <input
            placeholder="Nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Jumlah Jiwa</label>
          <input
            placeholder="Jumlah Jiwa"
            name="jumlah_jiwa"
            value={formData.jumlah_jiwa}
            onChange={handleChange}
          />
        </Form.Field>
        {/* Tambahkan field lainnya sesuai kebutuhan */}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
