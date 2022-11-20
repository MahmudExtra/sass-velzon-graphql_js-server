exports.Query = {
  buoy : (_,__,{db})=>{
    return db.Buoy;
  },
  buoys: (_,__,{db})=>{
    return db.Buoys;
  }
};
