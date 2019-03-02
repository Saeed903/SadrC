import Vue from 'vue'
import Router from 'vue-router'
import Bitcoin from './views/Bitcoin.vue'
import Ethereum from './views/Ethereum.vue'
import Zcash from './views/Zcash.vue'
import Ripple from './views/Ripple.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import SadrCrypto from './views/SadrCrypto.vue'
import ResetPassword from './views/ResetPassword.vue'
import MenuWallet from './views/MenuWallet.vue'
import BitcoinCity from './views/BitcoinCity.vue'
import BitcoinCountry from './views/BitcoinCountry.vue'
import RepublicIran from './views/RepublicIran.vue'
import HaveQuestion from './views/HaveQuestion.vue'
import PostTrade from './views/PostTrade.vue'
import Wallet from './views/Wallet.vue'
import DashBoard from './views/DashBoard.vue'
import DashboardOpenTrade from './views/DashboardOpenTrade.vue'
import DashboardCompletedTrades from './views/DashboardCompletedTrades.vue'
import DashboardCancelledTrades from './views/DashboardCancelledTrades.vue'
import DashboardAllClosedTrades from './views/DashboardAllClosedTrades.vue'
import LearnAdverDashboard from './views/LearnAdverDashboard.vue'
import MoreToolSadrCrypto from './views/MoreToolSadrCrypto.vue'
import LogInPageChange from './views/LogInPageChange.vue'
import Compensation from './views/Compensation.vue'
import SadrCryptoStatement from './views/SadrCryptoStatement.vue'
import TransactionSystem from './views/TransactionSystem.vue'
import Fees from './views/Fees.vue'
import Forums from './views/Forums.vue'
import Help from './views/Help.vue'
import EditProfileAccountSecurity from './views/EditProfileAccountSecurity.vue'
import EditProfileAccountSecurityLoginGuard from './views/EditProfileAccountSecurityLoginGuard.vue'
import EditProfileAccountSecurityLoginHistory from './views/EditProfileAccountSecurityLoginHistory.vue'
import EditProfileChangeEmail from './views/EditProfileChangeEmail.vue'
import EditProfileIdentifyVerify from './views/EditProfileIdentifyVerify.vue'
import EditProfileSetRealName from './views/EditProfileSetRealName.vue'
import EditProfileVerifyPhoneNumberVerification from './views/EditProfileVerifyPhoneNumberVerification.vue'
import EditYourProfile from './views/EditYourProfile.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import TermsOfService from './views/TermsOfService.vue'
import Order from './views/Order.vue'
import Order1 from './views/Order1.vue'
import Trader from './views/Trader.vue'
import TradeReportBadAdvertisement from './views/TradeReportBadAdvertisement.vue'
import TraderReportFraudulentUser from './views/TraderReportFraudulentUser.vue'
import WalletReceiveBitcoinOldAddress from './views/WalletReceiveBitcoinOldAddress.vue'
import walletReciveBitcoinQRCodeForMobile from './views/walletReciveBitcoinQRCodeForMobile.vue'
import WalletSendBitconHowLong from './views/WalletSendBitconHowLong.vue'
import WalletSendBitconOutgoingbitcoin from './views/WalletSendBitconOutgoingbitcoin.vue'
import WalletSendBitconRefunds from './views/WalletSendBitconRefunds.vue'
import Home from './views/Home.vue'
import AdvertiserProfile from './views/AdvertiserProfile.vue'
import Support from './views/Support.vue'
import Merchant from './views/Merchant.vue'
import Trusted from './views/Trusted.vue'
import SupportDrop from './views/SupportDrop.vue'
import FrequentlyAskedQuestions from './views/FrequentlyAskedQuestions.vue'
import ErrorAuth from './views/ErrorAuth.vue'
import SupportCreateNewTicket from './views/SupportCreateNewTicket.vue'
import store from './store';
import AboutUs from './views/AboutUs.vue'
import HowToBuyBticoins from './views/HowToBuyBticoins.vue'
import EditProfileChangePassWord from './views/EditProfileChangePassWord.vue'
import Guides from './views/Guides.vue'
import EditProfilePersonalData from './views/EditProfilePersonalData.vue'
import Blog from './views/Blog.vue'
import EditProfileDeleteAccount from './views/EditProfileDeleteAccount.vue'
import CoinList from './views/CoinList.vue'
import SaeedTest from './views/SaeedTest.vue'
import FarzadTest from './components/FarzadTest.vue'

Vue.use(Router);

const authFunction = function(to, from, next){
    store.dispatch('auth/authenticate').then(()=>{
      next();
    }).catch(() => {
      next();
    })
};

const authPrivateFunction = function(to, from, next){
  store.dispatch('auth/authenticate').then(()=>{
    next();
  }).catch(() => {
    next('/ErrorAuth');
  })
}

export default new Router({
  routes: [
 
    {
      path: '/SaeedTest',
      name: 'SaeedTest',
      component: SaeedTest,
    },{
      path: '/CoinList',
      name: 'CoinList',
      component: CoinList,
    },
    {
      path: '/FarzadTest',
      name: 'FarzadTest',
      component: FarzadTest,
    }, 
    {
      path: '/ErrorAuth',
      name: 'ErrorAuth',
      component: ErrorAuth,
    }, 
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter(to, from, next){
        store.dispatch('auth/authenticate').then(()=>{
          next('/SadrCrypto');
        }).catch(() => {
          next('/SadrCrypto');
        })
      }
    }, 
    {
      path: '/EditProfileDeleteAccount',
      name: 'EditProfileDeleteAccount',
      component: EditProfileDeleteAccount,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    }, 
    {
      path: '/EditProfilePersonalData',
      name: 'EditProfilePersonalData',
      component: EditProfilePersonalData,
    }, 
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
    }, 
    {
      path: '/EditProfileChangePassWord',
      name: 'EditProfileChangePassWord',
      component: EditProfileChangePassWord,
    }, 
    {
      path: '/FrequentlyAskedQuestions',
      name: 'FrequentlyAskedQuestions',
      component: FrequentlyAskedQuestions,
    }, 
    {
      path: '/SupportCreateNewTicket',
      name: 'SupportCreateNewTicket',
      component: SupportCreateNewTicket,
    }, 
    {
      path: '/SupportDrop',
      name: 'SupportDrop',
      component: SupportDrop,
    }, 
    {
      path: '/Trusted',
      name: 'Trusted',
      component: Trusted,
    }, 
    {
      path: '/Merchant',
      name: 'Merchant',
      component: Merchant,
    }, 
    {
      path: '/Support',
      name: 'Support',
      component: Support,
    }, 
    {
      path: '/SadrCrypto',
      name: 'SadrCrypto',
      component: SadrCrypto,
      beforeEnter: authFunction
    }, 
    {
      path: '/AdvertiserProfile',
      name: 'AdvertiserProfile',
      component: AdvertiserProfile,
    }, 
    {
      path: '/WalletSendBitconRefunds',
      name: 'WalletSendBitconRefunds',
      component: WalletSendBitconRefunds
    },
    {
      path: '/WalletSendBitconOutgoingbitcoin',
      name: 'WalletSendBitconOutgoingbitcoin',
      component: WalletSendBitconOutgoingbitcoin
    },
    {
      path: '/WalletSendBitconHowLong',
      name: 'WalletSendBitconHowLong',
      component: WalletSendBitconHowLong
    },
    {
      path: '/walletReciveBitcoinQRCodeForMobile',
      name: 'walletReciveBitcoinQRCodeForMobile',
      component: walletReciveBitcoinQRCodeForMobile
    },
    {
      path: '/WalletReceiveBitcoinOldAddress',
      name: 'WalletReceiveBitcoinOldAddress',
      component: WalletReceiveBitcoinOldAddress
    },
    {
      path: '/TraderReportFraudulentUser',
      name: 'TraderReportFraudulentUser',
      component: TraderReportFraudulentUser
    },
    {
      path: '/TradeReportBadAdvertisement',
      name: 'TradeReportBadAdvertisement',
      component: TradeReportBadAdvertisement
    },
    {
      path: '/Trader',
      name: 'Trader',
      component: Trader
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Order1',
      name: 'Order1',
      component: Order1
    },
    {
      path: '/TermsOfService',
      name: 'TermsOfService',
      component: TermsOfService
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/EditYourProfile',
      name: 'EditYourProfile',
      component: EditYourProfile
    },
    {
      path: '/EditProfileVerifyPhoneNumberVerification',
      name: 'EditProfileVerifyPhoneNumberVerification',
      component: EditProfileVerifyPhoneNumberVerification
    },
    {
      path: '/EditProfileSetRealName',
      name: 'EditProfileSetRealName',
      component: EditProfileSetRealName
    },
    {
      path: '/EditProfileIdentifyVerify',
      name: 'EditProfileIdentifyVerify',
      component: EditProfileIdentifyVerify
    },
    {
      path: '/EditProfileChangeEmail',
      name: 'EditProfileChangeEmail',
      component: EditProfileChangeEmail
    },
    {
      path: '/EditProfileAccountSecurityLoginHistory',
      name: 'EditProfileAccountSecurityLoginHistory',
      component: EditProfileAccountSecurityLoginHistory
    },
    {
      path: '/EditProfileAccountSecurityLoginGuard',
      name: 'EditProfileAccountSecurityLoginGuard',
      component: EditProfileAccountSecurityLoginGuard
    },
    {
      path: '/EditProfileAccountSecurity',
      name: 'EditProfileAccountSecurity',
      component: EditProfileAccountSecurity
    },
    {
      path: '/Fees',
      name: 'Fees',
      component: Fees
    },
    {
      path: '/TransactionSystem',
      name: 'TransactionSystem',
      component: TransactionSystem
    },
    {
      path: '/SadrCryptoStatement',
      name: 'SadrCryptoStatement',
      component: SadrCryptoStatement
    },
    {
      path: '/Compensation',
      name: 'Compensation',
      component: Compensation
    },
    {
      path: '/MoreToolSadrCrypto',
      name: 'MoreToolSadrCrypto',
      component: MoreToolSadrCrypto
    },
    {
      path: '/LogInPageChange',
      name: 'LogInPageChange',
      component: LogInPageChange
    },
    {
      path: '/LearnAdverDashboard',
      name: 'LearnAdverDashboard',
      component: LearnAdverDashboard
    },
    {
      path: '/DashboardAllClosedTrades',
      name: 'DashboardAllClosedTrades',
      component: DashboardAllClosedTrades
    },
    {
      path: '/DashboardCancelledTrades',
      name: 'DashboardCancelledTrades',
      component: DashboardCancelledTrades
    },
    {
      path: '/DashboardCompletedTrades',
      name: 'DashboardCompletedTrades',
      component: DashboardCompletedTrades
    },
    {
      path: '/DashboardOpenTrade',
      name: 'DashboardOpenTrade',
      component: DashboardOpenTrade
    },
    {
      path: '/DashBoard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/Wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help
    },
    {
      path: '/Forums',
      name: 'Forums',
      component: Forums,
      beforeEnter:authPrivateFunction
    },
    {
      path: '/PostTrade',
      name: 'PostTrade',
      component: PostTrade
    },
    {
      path: '/HaveQuestion',
      name: 'HaveQuestion',
      component: HaveQuestion
    },
    {
      path: '/RepublicIran',
      name: 'RepublicIran',
      component: RepublicIran
    },
    {
      path: '/BitcoinCountry',
      name: 'BitcoinCountry',
      component: BitcoinCountry
    },
    {
      path: '/BitcoinCity',
      name: 'BitcoinCity',
      component: BitcoinCity
    },
    {
      path: '/Bitcoin',
      name: 'Bitcoin',
      component: Bitcoin
    },
    {
      path: '/Ethereum',
      name: 'Ethereum',
      component: Ethereum
    },
    {
      path: '/Zcash',
      name: 'Zcash',
      component: Zcash
    },
    {
      path: '/Ripple',
      name: 'Ripple',
      component: Ripple
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup  
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ResetPassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/MenuWallet',
      name: 'MenuWallet',
      component: MenuWallet
    },
    {
      path: '/HowToBuyBticoins',
      name: 'HowToBuyBticoins',
      component: HowToBuyBticoins
    },
    {
      path: '/Guides',
      name: 'Guides',
      component: Guides
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    
  ]
})
