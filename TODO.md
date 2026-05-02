# Testimonials Mobile Adaptation TODO

## Plan: Make Testimonials professionally responsive with single card view for mobile

### Steps:
1. [ ] Add scroll-snap CSS to Carousel component for mobile single card view
2. [ ] Update TestimonialCard with unified responsive layout (remove duplicate sm:hidden code)
3. [ ] Optimize card widths and spacing for mobile: `w-[85vw] max-w-[380px]`
4. [ ] Ensure proper touch/swipe scroll-snap-align: center on mobile
5. [ ] Test the implementation

### Changes in src/components/TestimonialsSection.tsx:
- Carousel: Add scroll-snap-type and scroll-snap-align properties
- TestimonialCard: Unify mobile/desktop content into single responsive layout
- Update navigation buttons for better mobile positioning

### Status: In Progress
