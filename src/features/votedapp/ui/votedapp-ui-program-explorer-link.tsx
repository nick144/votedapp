import { VOTEDAPP_PROGRAM_ADDRESS } from '@project/anchor'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function VotedappUiProgramExplorerLink() {
  return <AppExplorerLink address={VOTEDAPP_PROGRAM_ADDRESS} label={ellipsify(VOTEDAPP_PROGRAM_ADDRESS)} />
}
