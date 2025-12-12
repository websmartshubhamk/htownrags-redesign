# Popup Specification - H-Town Rags

## Overview
Strategic popup system to capture leads, promote offers, and enhance user engagement without disrupting the shopping experience.

## Popup Types

### 1. Welcome Popup
**Trigger**: First-time visitor (cookie-based)
**Timing**: 5 seconds after page load
**Design**: 
- Vintage postcard aesthetic
- Brand colors and typography
- Mobile-optimized sizing

**Content**:
```
Welcome to H-Town Rags!
Get 10% off your first order

[Email input field]
[Get My Discount] [Maybe Later]

*By signing up, you agree to receive marketing emails
```

### 2. Exit Intent Popup
**Trigger**: Mouse movement towards browser close/back
**Timing**: Once per session
**Design**: Urgent but not aggressive

**Content**:
```
Wait! Don't miss out on vintage gold!
Save your favorites before you go

[Create Wishlist] [Continue Shopping] [X]
```

### 3. Cart Abandonment Popup
**Trigger**: Inactive on cart page for 30 seconds
**Timing**: Once per session
**Content**:
```
Need help with sizing?
Our vintage experts are here to help!

[Chat with Vinnie] [Size Guide] [Checkout Now]
```

### 4. Newsletter Signup (Scroll-triggered)
**Trigger**: 70% page scroll on blog/gallery
**Timing**: Once per week per user
**Content**:
```
Join the Vintage Insider Club
Weekly style tips & exclusive first looks

[Email] [Join Now]
□ I agree to receive emails
```

### 5. Seasonal/Promotional Popups
**Trigger**: Landing page entry during campaigns
**Timing**: Customizable per campaign
**Examples**:
- Black Friday deals
- Seasonal sales
- New collection launches
- Event announcements

### 6. Location-based Popup
**Trigger**: User within 10 miles of store
**Timing**: Once per month
**Content**:
```
You're near our Hitchin store!
Visit us today for exclusive in-store finds

[Get Directions] [Store Hours] [Not Now]
```

## Design Guidelines

### Visual Standards
- **Backdrop**: Semi-transparent overlay (rgba(0,0,0,0.5))
- **Popup background**: White with subtle texture
- **Border**: 2px solid with vintage gold accent
- **Shadow**: Vintage-style offset shadow
- **Animation**: Smooth fade-in (300ms)

### Responsive Behavior
**Desktop**: 
- Max width: 600px
- Centered positioning
- 20px margin from edges

**Mobile**:
- Full width with 16px padding
- Bottom sheet style option
- Larger touch targets
- Simplified layouts

### Accessibility
- Focus trap when open
- ESC key to close
- Clear close button
- Screen reader announcements
- Keyboard navigation

## Technical Implementation

### Cookie/Storage Management
```javascript
popupSettings = {
  welcomeShown: boolean,
  lastShownDate: timestamp,
  emailCaptured: boolean,
  suppressUntil: timestamp,
  interactionCount: number
}
```

### Display Rules
1. **Frequency Capping**
   - Welcome: Once per visitor
   - Promotional: Once per day
   - Exit intent: Once per session
   - Newsletter: Once per week

2. **Suppression Logic**
   - After email submission: 30 days
   - After "No thanks": 7 days
   - After purchase: 14 days

3. **Priority System**
   - Cart abandonment > Exit intent
   - Promotional > Newsletter
   - Welcome > All others

### A/B Testing Variables
- Timing delays
- Copy variations
- Design styles
- CTA buttons
- Offers/incentives

## Integration Requirements

### Email Marketing
- Klaviyo/Mailchimp integration
- Segment tagging
- Welcome series trigger
- Preference management

### Analytics Tracking
- Display events
- Interaction rates
- Conversion tracking
- A/B test results
- Revenue attribution

### CRM Integration
- Lead capture
- Preference recording
- Suppression list sync
- Customer journey tracking

## Performance Optimization

### Loading Strategy
- Lazy load popup code
- Preload only active campaigns
- CDN delivery for assets
- Minimize JavaScript impact

### Mobile Performance
- Reduced animations
- Optimized images
- Touch-friendly controls
- Network-aware loading

## Compliance & Best Practices

### GDPR Compliance
- Clear consent language
- Easy opt-out options
- Data usage transparency
- Cookie policy links

### User Experience
- Non-intrusive timing
- Clear value proposition
- Easy dismissal
- Frequency limits
- Mobile-first design

## Success Metrics

### KPIs
1. **Email Capture Rate**: 15-20% target
2. **Popup Interaction Rate**: 25-30%
3. **Conversion Rate**: 5-8%
4. **Bounce Rate Impact**: <2% increase
5. **Mobile Performance**: Equal to desktop

### Testing Schedule
- Weekly A/B tests
- Monthly performance review
- Quarterly strategy adjustment
- Seasonal campaign planning