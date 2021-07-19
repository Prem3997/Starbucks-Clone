import { Link } from "react-router-dom"
import { SIGN_UP, REWARDS_PAGE_MOBILE } from "./routes"

export const REWARDS_FEATURE = {
    title: "FREE COFFEE IS A TAP AWAY",
    info: <p>Join now to start earning Rewards.<br /> <Link to={REWARDS_PAGE_MOBILE}>Join in the app</Link> for the best experience</p>,
    link: "Join Now",
    path: SIGN_UP,
    image: "https://www.chewboom.com/wp-content/uploads/2020/09/Starbucks-Introduces-Star-Days-For-Starbucks-Rewards-Members-678x381.jpg",
    background: "rgb(212, 233, 226)",
    color: "#1e3932",
    className: "featured__hoverLight"

}

export const REWARDS_SUB_CON_1 = {
    heading: "Getting started is easy",
    paragraph: "Earn Stars and get rewarded in a few easy steps.",
    sub1: {
        image: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg",
        heading: "Create an Account",
        paragraph: <p>To get started, <Link to={SIGN_UP}>join now.</Link> You can also <Link to={REWARDS_PAGE_MOBILE}>join in the app</Link> to get access to the full range of Starbucks® Rewards benefits.</p>
    },
    sub2: {
        image: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg",
        heading: "Order and pay how you’d like",
        paragraph: "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways."
    },
    sub3: {
        image: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg",
        heading: "Earn Stars, get Rewards",
        paragraph: "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
    }
}

export const REWARDS_SUB_CON_3 = {
    heading: "Endless Extras",
    paragraph: "Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.",
    sub1: {
        image: "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg",
        heading: "Fun freebies",
        paragraph: "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
    },
    sub2: {
        image: "https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg",
        heading: "Order & pay ahead",
        paragraph: "Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
    },
    sub3: {
        image: "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg",
        heading: "Order & pay ahead",
        paragraph: "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
    }
}

export const REWARDS_SUB_CON_4 = {
    heading: "Cash or card, you earn Stars",
    paragraph: "No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.",
    sub1: {
        image1: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png",
        image2: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png",
        heading: "1★ per dollar",
        headignInfo: "Pay as you go",
        subheading1: "Scan and pay separately",
        subheadingInfo1: "Use cash or credit/debit card at the register.",
        subheading2: "Save payment in the app",
        subheadingInfo2: "Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
    },
    sub2: {
        image1: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png",
        image2: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png",
        heading: "2★ per dollar",
        headignInfo: "Add funds in the app",
        subheading1: "Preload",
        subheadingInfo1: "To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.",
        subheading2: "Register your gift card",
        subheadingInfo2: "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
    },
    sub3: {
        image1: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png",
        heading: "3★ per dollar",
        headignInfo: "With Starbucks® Rewards Visa® Card",
        subheading1: "Earn Stars even faster",
        subheadingInfo1: "Earn Stars on all purchases you make with our credit card opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.",
    },
}
export const REWARDS_STAR_TABS_Heading = "Get your favorites for free"
export const starLists = [
    <h1>25 < span style={{ color: "#cba258" }} >★</span></h1>,
    <h1>50 < span style={{ color: "#cba258" }} >★</span></h1>,
    <h1>150 < span style={{ color: "#cba258" }} >★</span></h1>,
    <h1>200 < span style={{ color: "#cba258" }} >★</span></h1>,
    <h1>400 < span style={{ color: "#cba258" }} >★</span></h1>
]

export const starTabs = [
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png',
        heading: "Customize your drink",
        paragraph: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png',
        heading: "Brewed hot coffee, bakery item or hot tea",
        paragraph: "Pair coffee cake or an almond croissant with your fresh cup of hot brew."
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png',
        heading: "Handcrafted drink, hot breakfast or parfait",
        paragraph: "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png',
        heading: "Salad, sandwich or protein box",
        paragraph: "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box"
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png',
        heading: "Select merchandise or at-home coffee",
        paragraph: "Take home a signature cup, a bag of coffee or your choice of select coffee accessories."
    }
]

export const REWARDSFORM = {
    heading: "Star Codes",
    headingInfo: "Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.",
    formPlaceHolder: "Enter your Star Code",
    formError: "Please enter a star code.",
    paragraph: <p>Have a receipt but don't have a code?<br />Go to <Link onClick={() => window.open("https://starbucks-stars.com/en-us/", '_blank').focus()}>starbucks-stars.com</Link> opens in new window to upload your receipt and collect your Stars.</p>
}