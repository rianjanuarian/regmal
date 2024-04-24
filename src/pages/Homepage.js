import Head from 'next/head';
import data from '../../family.json';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="ui container">
      <Head>
        <title>Read Data KK dan Anggota Keluarga</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
      </Head>
      <h1>Data KK dan Anggota Keluarga</h1>
      <Link href="/input">
        Tambah Data Keluarga
      </Link>
      
      {data.map((e, index) => (
        <div key={index} className="ui segment">
          <h2>Kartu Keluarga</h2>
          <div>
            <strong>Kode: </strong>{e.kode}<br />
            <strong>Nama: </strong>{e.name}<br />
            <strong>Jumlah Jiwa: </strong>{e.jumlah_jiwa}<br />
            <strong>Provinsi: </strong>{e.provinsi}<br />
            <strong>Kabupaten: </strong>{e.kabupaten}<br />
            <strong>Kecamatan: </strong>{e.kecamatan}<br />
            <strong>Kampung: </strong>{e.kampung}<br />
 
          </div>
          <h2>Anggota Keluarga</h2>
          {e.anggota_keluarga.map((el, idx) => (
            <div key={idx}>
              <strong>Nama: </strong>{el.name}<br />
             
            </div>
          ))}
          <br/>
           <button style={{color: "black"}}>Tambah anggota Keluarga</button>
        </div>
      ))}
    </div>
  );
};



