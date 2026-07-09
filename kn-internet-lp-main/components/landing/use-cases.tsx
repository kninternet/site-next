import { Film, Trophy, Gamepad2, Briefcase, GraduationCap, Video } from 'lucide-react'

const cases = [
  { icon: Film, title: 'Filmes e Séries', text: 'Streaming em 4K sem travar, em vários aparelhos ao mesmo tempo.' },
  { icon: Trophy, title: 'Futebol', text: 'Assista aos jogos ao vivo com imagem estável do início ao fim.' },
  { icon: Gamepad2, title: 'Games', text: 'Baixo ping e conexão estável para jogar online sem lag.' },
  { icon: Briefcase, title: 'Home Office', text: 'Trabalhe conectado com upload rápido e conexão confiável.' },
  { icon: GraduationCap, title: 'Estudos', text: 'Aulas e cursos online sem interrupções na hora certa.' },
  { icon: Video, title: 'Videochamadas', text: 'Reuniões nítidas, sem quedas e sem aquele congelamento.' },
]

export function UseCases() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Internet para todos os momentos.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Uma conexão estável que acompanha a rotina de toda a família.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-kn-blue/8 bg-white p-7 transition-all hover:-translate-y-1 hover:border-kn-orange/25 hover:shadow-xl hover:shadow-kn-blue/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-kn-blue/[0.06] transition-colors group-hover:bg-kn-orange/10">
                <Icon className="h-6 w-6 text-kn-blue transition-colors group-hover:text-kn-orange" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-kn-blue">{title}</h3>
              <p className="mt-2 leading-relaxed text-kn-blue/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
