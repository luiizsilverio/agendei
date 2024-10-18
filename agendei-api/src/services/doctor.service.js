class DoctorService {

  async all() {
    const doctors = [
      {id: 1, name: "Heber", specialty: "Cardiologista", icon: "M"},
      {id: 1, name: "Palmira", specialty: "Cardiologista", icon: "F"},
      {id: 1, name: "Valdirene", specialty: "Cardiologista", icon: "F"},
    ]
    
    return doctors;
  }

  async insert() {
    return { message: "Inserir médico" };
  }

}

export default DoctorService;
