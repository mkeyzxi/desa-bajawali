'use client';

interface MapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
}

export default function Map({ latitude = -1.4904673, longitude = 119.3656846, zoom = 13 }: MapProps) {
  const src = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  return (
    <div className="w-full h-full">
      <iframe
        src={src}
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
