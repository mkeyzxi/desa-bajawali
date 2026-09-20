'use client';

interface MapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

export default function Map({ latitude, longitude, zoom = 13 }: MapProps) {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15164.482822080952!2d119.35670745206438!3d-1.4914143088638583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8cf9abf9303445%3A0xcc92ae06702c7a48!2sBajawali%2C%20Kec.%20Lariang%2C%20Kab.%20Pasangkayu%2C%20Sulawesi%20Barat!5e1!3m2!1sid!2sid!4v1789894154841!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
