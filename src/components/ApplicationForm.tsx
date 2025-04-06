
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';

const ApplicationForm = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    uci: '',
    applicationNumber: '',
    applicationType: 'online',
    surname: '',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplicationTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, applicationType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if form is valid
    let isValid = true;
    let errorMessage = '';
    
    if (formData.applicationType === 'online' && !formData.applicationNumber) {
      isValid = false;
      errorMessage = 'Please enter your application number.';
    } else if (formData.applicationType === 'paper' && !formData.uci) {
      isValid = false;
      errorMessage = 'Please enter your UCI.';
    }
    
    if (!formData.surname) {
      isValid = false;
      errorMessage = 'Please enter your surname/family name.';
    }
    
    if (!formData.dob) {
      isValid = false;
      errorMessage = 'Please enter your date of birth.';
    }
    
    if (!isValid) {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Checking status",
      description: "Your application status is being retrieved.",
    });
    
    // In a real app, we would check the application status here
    setTimeout(() => {
      toast({
        title: "Status retrieved",
        description: "Your application is in process. Please check back later for updates.",
      });
    }, 2000);
  };

  return (
    <div className="bg-white border border-gray-300 p-6">
      <h2 className="text-xl font-bold mb-6">Check application status</h2>
      
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-6">
          <legend className="text-lg font-bold mb-2">Application type</legend>
          <RadioGroup
            value={formData.applicationType}
            onValueChange={handleApplicationTypeChange}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="online" id="online" />
              <Label htmlFor="online">Online application</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paper" id="paper" />
              <Label htmlFor="paper">Paper application</Label>
            </div>
          </RadioGroup>
        </fieldset>
        
        {formData.applicationType === 'online' ? (
          <div className="mb-4">
            <Label htmlFor="applicationNumber" className="font-bold">
              Application number
            </Label>
            <div className="mt-1">
              <Input
                id="applicationNumber"
                name="applicationNumber"
                value={formData.applicationNumber}
                onChange={handleChange}
                className="mt-1"
                placeholder="Example: ABC-12345-DEFG"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              This is the number we sent you after you submitted your application.
            </p>
          </div>
        ) : (
          <div className="mb-4">
            <Label htmlFor="uci" className="font-bold">
              UCI (Unique Client Identifier)
            </Label>
            <div className="mt-1">
              <Input
                id="uci"
                name="uci"
                value={formData.uci}
                onChange={handleChange}
                className="mt-1"
                placeholder="Example: 12345-67890"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              This is the number found on your application documents.
            </p>
          </div>
        )}
        
        <div className="mb-4">
          <Label htmlFor="surname" className="font-bold">
            Surname/Family name
          </Label>
          <div className="mt-1">
            <Input
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1"
              autoComplete="family-name"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            As shown on your application.
          </p>
        </div>
        
        <div className="mb-6">
          <Label htmlFor="dob" className="font-bold">
            Date of birth
          </Label>
          <div className="mt-1">
            <Input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        </div>
        
        <Button type="submit" className="gc-btn-primary">
          Check status
        </Button>
      </form>
    </div>
  );
};

export default ApplicationForm;
