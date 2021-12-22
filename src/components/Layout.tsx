import React from 'react';

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <div className="flex flex-col items-center min-h-[85vh] min-w-[35vw] p-6 rounded bg-white shadow-lg">
        <h2 className="text-xl font-bold text-slate-600">Register</h2>
        <form>
          {children}
        </form>
      </div>
    </div>
  );
};

export default Layout;