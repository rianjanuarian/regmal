// import Head from 'next/head';
// import data from './api/family.json';
// import Link from 'next/link';

// export default function Homepage() {
//   return (
//     <div className="ui container">
//       <Head>
//         <title>Read Data KK dan Anggota Keluarga</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
//       </Head>
//       <h1>Data KK dan Anggota Keluarga</h1>
//       <Link href="/input">
//         Tambah Data Keluarga
//       </Link>
      
//       {data.map((kk, index) => (
//         <div key={index} className="ui segment">
//           <h2>Kartu Keluarga</h2>
//           <div>
//             <strong>Kode: </strong>{kk.kode}<br />
//             <strong>Nama: </strong>{kk.nama}<br />
//             <strong>Jumlah Jiwa: </strong>{kk.jumlah_jiwa}<br />
 
//           </div>
//           <h2>Anggota Keluarga</h2>
//           {kk.anggota_keluarga.map((anggota, idx) => (
//             <div key={idx}>
//               <strong>Nama: </strong>{anggota.nama}<br />
//               <strong>Jenis Kelamin: </strong>{anggota.jenis_kelamin}<br />
//               <strong>Tanggal Lahir: </strong>{anggota.tanggal_lahir}<br />
        
//             </div>
            
//           ))}
//           <br/>
//            <button style={{color: "black"}}>Tambah anggota Keluarga</button>
//         </div>
//       ))}
//     </div>
//   );
// };
// pages/index.js

import { useEffect, useState } from 'react';
import { Container, List } from 'semantic-ui-react';
import fs from 'fs';
import path from 'path';
import 'semantic-ui-css/semantic.min.css';

export default function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filePath = path.join(process.cwd(), 'data.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        setData(JSON.parse(jsonData).kk);
      } catch (error) {
        console.error('Error reading data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Daftar Keluarga</h1>
      <List divided relaxed>
        {data.map((family, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>{family.nama}</List.Header>
              <List.Description>
                <p>Kode: {family.kode}</p>
                <p>Jumlah Jiwa: {family.jumlah_jiwa}</p>
                {/* Tambahkan informasi lain yang ingin Anda tampilkan */}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
