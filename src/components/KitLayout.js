import React from 'react';
import SidebarLayout from './SidebarLayout';
import KitSidebar from './KitSidebar';

const KitLayout = ({ children, activeCategory }) => (
  <SidebarLayout
    title="Kit"
    sidebar={<KitSidebar activeCategory={activeCategory} />}
  >
    {children}
  </SidebarLayout>
);

export default KitLayout;
