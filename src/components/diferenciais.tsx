import DiferencialCard from './DiferencialCard';
import LocationIcon from './icons/LocationIcon';
import ServiceIcon from './icons/ServiceIcon';
import ParkingIcon from './icons/ParkingIcon';
import ElectricIcon from './icons/ElectricIcon';

// 🔹 Wrapper padrão para TODOS os ícones
const iconWrapper = (icon: React.ReactNode) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violeta-100 text-violeta-600">
    {icon}
  </div>
);

export default function Diferenciais() {
  return (
    <section className="py-20 bg-gradient-to-b from-violeta-50 to-white">
      <div className="container">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-4">
            Nossos diferenciais
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Conforto, localização e experiências pensadas para tornar sua estadia inesquecível.
          </p>

          <div className="flex justify-center mt-4">
            <div className="w-16 h-[2px] bg-violeta-600 rounded-full"></div>
          </div>
        </div>

        {/* Diferenciais principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
  
          <DiferencialCard
            icon={iconWrapper(<LocationIcon width={24} height={24} />)}
            title="Localização privilegiada"
            description="No coração de Tiradentes, a poucos passos dos principais pontos turísticos."
          />

          <DiferencialCard
            icon={iconWrapper(<ServiceIcon width={24} height={24} />)}
            title="Atendimento personalizado"
            description="Hospitalidade mineira com atenção aos detalhes em cada experiência."
          />

          <DiferencialCard
            icon={iconWrapper(<ParkingIcon width={24} height={24} />)}
            title="Estacionamento"
            description="Vagas disponíveis com segurança e praticidade para nossos hóspedes."
          />

        </div>

        {/* Diferencial destaque */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            
            <DiferencialCard
              highlight
              badge="Novidade"
              images={[
                "/images/carregadorEletrico/carregador.jpg",
                "/images/carregadorEletrico/carregadorLonge.jpg"
              ]}
              icon={iconWrapper(<ElectricIcon width={24} height={24} />)}
              title="Carregamento para veículos elétricos"
              description="Agora contamos com ponto de recarga exclusivo para veículos elétricos. Mais comodidade e tranquilidade durante sua estadia."
            />

          </div>
        </div>

      </div>
    </section>
  );
}