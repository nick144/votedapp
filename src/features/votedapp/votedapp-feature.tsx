import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { VotedappUiProgramExplorerLink } from './ui/votedapp-ui-program-explorer-link'
import { VotedappUiCreate } from './ui/votedapp-ui-create'
import { VotedappUiProgram } from '@/features/votedapp/ui/votedapp-ui-program'

export default function VotedappFeature() {
  const { account } = useSolana()

  if (!account) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="hero py-[64px]">
          <div className="hero-content text-center">
            <WalletDropdown />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppHero title="Votedapp" subtitle={'Run the program by clicking the "Run program" button.'}>
        <p className="mb-6">
          <VotedappUiProgramExplorerLink />
        </p>
        <VotedappUiCreate account={account} />
      </AppHero>
      <VotedappUiProgram />
    </div>
  )
}
