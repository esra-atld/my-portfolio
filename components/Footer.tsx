export default function Footer() {
    return (
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Ad Soyad — Tüm hakları saklıdır.
        </div>
      </footer>
    );
  }
  