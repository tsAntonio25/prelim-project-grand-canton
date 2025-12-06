import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})

export class Services {
  features = [
  {
    icon: 'leaf',
    title: 'Eco-friendly Facilities',
    info: 'Our resort uses sustainable materials and eco-friendly utilities.',
    flipped: false
  },
  {
    icon: 'seedling',
    title: 'Organic Farm Produce',
    info: 'Fresh fruits and vegetables harvested daily from our organic farm.',
    flipped: false
  },
  {
    icon: 'family',
    title: 'Family-Friendly',
    info: 'Activities and facilities suitable for families and kids.',
    flipped: false
  },
  {
    icon: 'paw',
    title: 'Pet-Friendly',
    info: 'Your pets are welcome in our resort areas and rooms.',
    flipped: false
  },
  {
    icon: 'bus',
    title: 'Free Shuttle Service',
    info: 'Convenient shuttle service within the resort and nearby attractions.',
    flipped: false
  },
  {
    icon: 'camera',
    title: 'Instagrammable Spots',
    info: 'Beautiful spots perfect for photography and social media.',
    flipped: false
  }
];

  services = [
    {
      title: 'Eco-Stay Accommodations',
      description: 'Nature-inspired rooms designed for comfort and tranquility. Ideal for families, couples, and retreat-goers.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/8f/f7/f3/green-canyon.jpg?w=2000&h=-1&s=1'
    },
    {
      title: 'Farm-to-Table Dining',
      description: 'Enjoy fresh and organic meals crafted with ingredients sourced directly from our farm.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/80/94/50/green-canyon-resort.jpg?w=1400&h=-1&s=1'
    },
    {
      title: 'Lagoon & Swimming Pools',
      description: 'Relax in our eco-friendly pools and lagoon surrounded by beautiful farm landscapes.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/80/9d/10/green-canyon-resort.jpg?w=1600&h=-1&s=1'
    },
    {
      title: 'Spa & Wellness Center',
      description: 'Restore your energy with massages and wellness treatments using natural oils and herbs.',
      image: 'https://greencanyonleisurefarms.com/wp-content/uploads/2025/07/Massage-v2.png'
    },
    {
      title: 'Events & Celebrations',
      description: 'Perfect venue for weddings, birthdays, corporate seminars, and creative photoshoots.',
      image: 'https://greencanyonleisurefarms.com/wp-content/uploads/2025/07/GreenCanyon-110-v2-scaled.jpg'
    },
    {
      title: 'Outdoor Adventures',
      description: 'Experience nature walks, biking trails, art installations, and more outdoor activities.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f5/ae/d2/grounds--v17476648.jpg?w=2000&h=-1&s=1'
    }
  ];
}
