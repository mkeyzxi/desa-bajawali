import Image from "next/image";
import Link from "next/link";
import { beritaDummy } from "@/data/dummy";
import { notFound } from "next/navigation";

// Ini di Next 15 mungkin berbentuk async component jika slug diambil dari params
export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = beritaDummy.find((n) => n.slug === slug);
  
  if (!news) {
    notFound();
  }

  // Get 2 related news
  const relatedNews = beritaDummy.filter((n) => n.id !== news.id).slice(0, 2);

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        
        {/* Breadcrumb & Category */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/berita" className="text-xs font-bold uppercase tracking-widest text-ink-400 hover:text-green-700 transition-colors">
              Berita
            </Link>
            <span className="text-ink-400 text-xs">&rarr;</span>
            <span className="text-xs font-bold uppercase tracking-widest text-green-700">
              {news.category}
            </span>
          </div>
          
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-ink-950 font-semibold leading-tight mb-6">
            {news.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-ink-600 border-t border-b border-paper-200 py-3">
            <div><strong>Penulis:</strong> Admin Desa</div>
            <div>&bull;</div>
            <div>{news.date}</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto relative aspect-[21/9] w-full mb-12 border border-paper-200 rounded-md overflow-hidden">
          <Image 
            src={news.image} 
            alt={news.title} 
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-xl prose-p:text-ink-800 prose-headings:font-editorial prose-headings:text-ink-950 max-w-none">
          <p className="text-xl font-medium text-ink-950 leading-relaxed mb-8">
            {news.excerpt}
          </p>
          <p>
            {news.content}
          </p>
          <p>
            Pemerintah desa terus berkomitmen untuk memberikan pelayanan dan informasi yang transparan bagi seluruh warga Desa Bajawali. Dukungan dari masyarakat sangat dibutuhkan untuk menyukseskan program-program ke depan.
          </p>
        </div>

        {/* Related News */}
        <div className="max-w-4xl mx-auto mt-24 pt-12 border-t border-paper-200">
          <h3 className="font-editorial text-2xl text-ink-950 mb-8">Berita Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedNews.map((related) => (
              <Link key={related.id} href={`/berita/${related.slug}`} className="group flex gap-4 items-start">
                <div className="w-1/3 aspect-[4/3] relative rounded-md overflow-hidden border border-paper-200 shrink-0">
                  <Image 
                    src={related.image} 
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-1">{related.category}</div>
                  <h4 className="font-editorial text-lg text-ink-950 font-semibold leading-snug group-hover:text-green-800 transition-colors mb-1 line-clamp-2">
                    {related.title}
                  </h4>
                  <div className="text-xs text-ink-400">{related.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
