import React, { useState } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

function ShopPage({collections}) {
  return (
    <div className='shop-page'>
      <CollectionsOverview/>
    </div>
  );
}



export default ShopPage ;
