import DiferencialCard from './DiferencialCard';
import LocationIcon from './icons/LocationIcon';
import ServiceIcon from './icons/ServiceIcon';
import ParkingIcon from './icons/ParkingIcon';

export default function Diferenciais() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Nossos diferenciais
          </h2>
          <div className="flex justify-center">
            <svg width="60" height="8" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 4 15 0 30 4C45 8 60 4 60 4" stroke="#6d28d9" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Diferenciais Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <DiferencialCard
            icon={<LocationIcon width={48} height={48} />}
            title="Excelente localização"
            description="Localizada no centro histórico de Tiradentes, ao lado da Igreja das Mercês e a poucos metros da praça principal."
          />
          
          <DiferencialCard
            icon={<ServiceIcon width={48} height={48} />}
            title="Atendimento simpático e personalizado"
            description="Com uma boa hospitalidade mineira, recebemos cada hóspede de forma única e especial."
          />
          
          <DiferencialCard
            icon={<ParkingIcon width={48} height={48} />}
            title="Estacionamento"
            description="Oferecemos estacionamento para nossos hóspedes para maior comodidade e segurança."
          />
        </div>
      </div>
    </section>
  );
}