import { StateWrapper as CommonsStateWrapper } from './state/StateWrapper'
import CampaignHeader from './components/CampaignHeader'
import DaiAction from './components/DaiAction'
import PrimaryButton from './stateless-components/PrimaryButton'
import SecondaryButton from './stateless-components/SecondaryButton'
import FormField from './stateless-components/FormField'
import UserContext, { UserProvider } from './context/User'
import { userActions } from './state/userState'
import { getConviction } from './state/convictionlib'
import AugmentedCurveContext, { AugmentedCurveProvider } from './context/AugmentedCurve'
import ConvictionVotingCurveContext, { ConvictionVotingCurveProvider } from './context/ConvictionVotingCurve'
import { curveActions } from './state/augmentedCurveState'
import { cvActions } from './state/convictionVotingCurveState'
import UserContext, {UserProvider,} from "./context/User";
import {userActions} from "./state/userState"
import {getConviction} from "./state/convictionlib"
import AugmentedCurveContext, {AugmentedCurveProvider} from './context/AugmentedCurve'
import ConvictionVotingCurveContext, {ConvictionVotingCurveProvider} from './context/ConvictionVotingCurve'
import {curveActions} from './state/augmentedCurveState'
import {cvActions} from './state/convictionVotingCurveState'
import CommonsNavHeader from './components/CommonsNavHeader';
export { CommonsStateWrapper }
export { CampaignHeader }
export { DaiAction }
export { UserContext, UserProvider, userActions }
<<<<<<< HEAD
export { AugmentedCurveContext, AugmentedCurveProvider, curveActions }
export { ConvictionVotingCurveContext, ConvictionVotingCurveProvider, cvActions }
export { PrimaryButton, SecondaryButton, FormField }
export { getConviction }
=======
export { AugmentedCurveContext, AugmentedCurveProvider, curveActions}
export { ConvictionVotingCurveContext, ConvictionVotingCurveProvider, cvActions}
export {PrimaryButton, SecondaryButton, FormField}
export {getConviction}
export {CommonsNavHeader}
>>>>>>> add shared commons nav header
