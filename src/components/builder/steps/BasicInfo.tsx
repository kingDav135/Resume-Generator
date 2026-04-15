'use client';

import { useResumeStore } from '@/store/useResumeStore';
import { Input } from '@/components/ui/Input';
import { Camera } from 'lucide-react';
import Image from 'next/image';

export function BasicInfo() {
  const { data, updateBasicInfo } = useResumeStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateBasicInfo({ [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateBasicInfo({ profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-purple">Basic Information</h2>
        <p className="text-foreground/60">Let&rsquo;s start with your contact details and professional title.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Image Upload */}
        <div className="flex-shrink-0">
          <label className="block text-sm font-medium text-foreground/80 mb-2 ml-1">Profile Photo</label>
          <div 
            onClick={() => document.getElementById('profile-upload')?.click()}
            className="h-32 w-32 rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center bg-card hover:bg-accent/5 transition-colors cursor-pointer group relative overflow-hidden"
          >
            {data.basicInfo.profileImage ? (
              <Image
                src={data.basicInfo.profileImage}
                alt="Profile"
                fill
                unoptimized
                className="object-cover transition-transform group-hover:scale-110"
              />
            ) : (
              <>
                <Camera className="text-foreground/20 group-hover:text-primary/40 transition-colors" size={32} />
                <span className="text-[10px] font-semibold text-foreground/40 mt-2 uppercase tracking-tighter">Upload</span>
              </>
            )}
            <input 
              id="profile-upload"
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageChange} 
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <Input 
            label="Full Name" 
            name="name" 
            placeholder="John Doe" 
            value={data.basicInfo.name}
            onChange={handleChange}
          />
          <Input 
            label="Professional Title" 
            name="role" 
            placeholder="Senior Product Designer" 
            value={data.basicInfo.role}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input 
          label="Email Address" 
          name="email" 
          type="email" 
          placeholder="john@example.com" 
          value={data.basicInfo.email}
          onChange={handleChange}
        />
        <Input 
          label="Phone Number" 
          name="phone" 
          placeholder="+1 (555) 000-0000" 
          value={data.basicInfo.phone}
          onChange={handleChange}
        />
        <Input 
          label="Location" 
          name="location" 
          placeholder="New York, NY" 
          value={data.basicInfo.location}
          onChange={handleChange}
        />
        <Input 
          label="Tagline" 
          name="tagline" 
          placeholder="Focusing on user-centric high-scale web apps" 
          value={data.basicInfo.tagline}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80 ml-1">Professional Summary</label>
        <textarea
          name="summary"
          className="w-full h-32 rounded-2xl border border-border bg-card px-4 py-3 text-base transition-colors placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Tell us about your background and what you bring to the table..."
          value={data.basicInfo.summary}
          onChange={handleChange}
        />
        <div className="flex justify-between items-center px-1">
          <p className="text-xs text-foreground/40 italic">Try to keep it between 100-300 characters for best impact.</p>
          <span className={`text-xs font-medium ${data.basicInfo.summary.length < 100 ? 'text-accent' : 'text-green-500'}`}>
            {data.basicInfo.summary.length} characters
          </span>
        </div>
      </div>
    </div>
  );
}
