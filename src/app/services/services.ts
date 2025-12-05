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
    title: 'Eco-friendly Facilities'
  },
  {
    icon: 'seedling',
    title: 'Organic Farm Produce'
  },
  {
    icon: 'family',
    title: 'Family-Friendly'
  },
  {
    icon: 'paw',
    title: 'Pet-Friendly'
  },
  {
    icon: 'bus',
    title: 'Free Shuttle Service'
  },
  {
    icon: 'camera',
    title: 'Instagrammable Spots'
  }
];

  services = [
    {
      title: 'Eco-Stay Accommodations',
      description: 'Nature-inspired rooms designed for comfort and tranquility. Ideal for families, couples, and retreat-goers.',
      image: 'assets/images/eco-stay.jpg'
    },
    {
      title: 'Farm-to-Table Dining',
      description: 'Enjoy fresh and organic meals crafted with ingredients sourced directly from our farm.',
      image: 'assets/images/dining.jpg'
    },
    {
      title: 'Lagoon & Swimming Pools',
      description: 'Relax in our eco-friendly pools and lagoon surrounded by beautiful farm landscapes.',
      image: 'assets/images/pool.jpg'
    },
    {
      title: 'Spa & Wellness Center',
      description: 'Restore your energy with massages and wellness treatments using natural oils and herbs.',
      image: 'assets/images/spa.jpg'
    },
    {
      title: 'Events & Celebrations',
      description: 'Perfect venue for weddings, birthdays, corporate seminars, and creative photoshoots.',
      image: 'assets/images/events.jpg'
    },
    {
      title: 'Outdoor Adventures',
      description: 'Experience nature walks, biking trails, art installations, and more outdoor activities.',
      image: 'assets/images/adventures.jpg'
    }
  ];
}
