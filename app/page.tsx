import Link from "next/link";

export default function Home() {
  // 导航项配置
  const navItems = [
    { label: "Awesome MCP", href: "/" },
    { label: "Model Timing", href: "/model-timing" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-[family-name:var(--font-geist-sans)]">
      {/* 简单的头部导航栏 */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">
                Awesome MCP
              </span>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-16 ${
                    item.href === "/"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* 移动端下拉菜单 */}
            <div className="flex sm:hidden">
              <div className="flex space-x-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      item.href === "/"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
          Awesome MCP
        </h1>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500"></footer>
    </div>
  );
}
