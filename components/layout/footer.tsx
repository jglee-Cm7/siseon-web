import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-16 border-b border-black py-8 lg:flex-row lg:items-start">
            {/* Logo */}
            <div className="shrink-0">
              <Image
                src="/logo/logo-vertical.svg"
                alt="logo"
                width={383}
                height={176}
              />
            </div>

            {/* Sitemap */}
            <div className="grid w-full grid-cols-2 gap-8 lg:w-auto lg:grid-cols-4">
              {/* 복음 */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold">복음</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/gospel/content"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    복음의 내용
                  </Link>
                  <Link
                    href="/gospel/confession"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    신앙고백
                  </Link>
                  <Link
                    href="/gospel/sermon"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    설교
                  </Link>
                </div>
              </div>

              {/* 공동체 */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold">공동체</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/community/introduction"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    교회 소개
                  </Link>
                  <Link
                    href="/community/leaders"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    섬기는 사람들
                  </Link>
                  <Link
                    href="/community/announcements"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    공지사항
                  </Link>
                  <Link
                    href="/community/magazine"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    월간지
                  </Link>
                </div>
              </div>

              {/* 도시 */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold">도시</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/city/pioneering"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    개척 이야기
                  </Link>
                  <Link
                    href="/city/ministry"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    도시사역
                  </Link>
                  <Link
                    href="/city/first-visit"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    처음 방문하셨다면
                  </Link>
                </div>
              </div>

              {/* SNS */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[16px] font-bold">SNS</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
