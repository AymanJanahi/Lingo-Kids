import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const numbers: QuizItem[] = [
    { 
        english: 'One', 
        arabic: 'واحد', 
        transliteration: 'Wahid', 
        imageData: SVG_TEMPLATES.text('1'), 
        audioData: DUMMY_AUDIO, 
        options: { transliterated: ['Wahid', 'Ithnan', 'Thalatha', 'Arba\'a'] } 
    },
    { 
        english: 'Two', 
        arabic: 'اثنان', 
        transliteration: 'Ithnan', 
        imageData: SVG_TEMPLATES.text('2'), 
        audioData: DUMMY_AUDIO, 
        options: { transliterated: ['Ithnan', 'Khamsa', 'Wahid', 'Sitta'] } 
    },
    { 
        english: 'Three', 
        arabic: 'ثلاثة', 
        transliteration: 'Thalatha', 
        imageData: SVG_TEMPLATES.text('3'), 
        audioData: DUMMY_AUDIO, 
        options: { transliterated: ['Thalatha', 'Sab\'a', 'Asharah', 'Tis\'a'] } 
    },
    { 
        english: 'Four', 
        arabic: 'أربعة', 
        transliteration: 'Arba\'a', 
        imageData: SVG_TEMPLATES.text('4'), 
        audioData: DUMMY_AUDIO, 
        options: { transliterated: ['Arba\'a', 'Wahid', 'Ithnan', 'Thalatha'] } 
    },
    { 
        english: 'Five', 
        arabic: 'خمسة', 
        transliteration: 'Khamsa', 
        imageData: SVG_TEMPLATES.text('5'), 
        audioData: DUMMY_AUDIO, 
        options: { transliterated: ['Khamsa', 'Sitta', 'Sab\'a', 'Thamania'] } 
    },
    {
        english: 'Six',
        arabic: 'ستة',
        transliteration: 'Sitta',
        imageData: SVG_TEMPLATES.text('6'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Sitta', 'Sab\'a', 'Khamsa', 'Thamania'] }
    },
    {
        english: 'Seven',
        arabic: 'سبعة',
        transliteration: 'Sab\'a',
        imageData: SVG_TEMPLATES.text('7'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Sab\'a', 'Sitta', 'Thamania', 'Tis\'a'] }
    },
    {
        english: 'Eight',
        arabic: 'ثمانية',
        transliteration: 'Thamania',
        imageData: SVG_TEMPLATES.text('8'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Thamania', 'Tis\'a', 'Sab\'a', 'Asharah'] }
    },
    {
        english: 'Nine',
        arabic: 'تسعة',
        transliteration: 'Tis\'a',
        imageData: SVG_TEMPLATES.text('9'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Tis\'a', 'Thamania', 'Asharah', 'Sab\'a'] }
    },
    {
        english: 'Ten',
        arabic: 'عشرة',
        transliteration: 'Asharah',
        imageData: SVG_TEMPLATES.text('10'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Asharah', 'Tis\'a', 'Ahada Ashar', 'Thamania'] }
    },
    {
        english: 'Eleven',
        arabic: 'أحد عشر',
        transliteration: 'Ahada Ashar',
        imageData: SVG_TEMPLATES.text('11'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Ahada Ashar', 'Ithna Ashar', 'Asharah', 'Thalathata Ashar'] }
    },
    {
        english: 'Twelve',
        arabic: 'اثنا عشر',
        transliteration: 'Ithna Ashar',
        imageData: SVG_TEMPLATES.text('12'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Ithna Ashar', 'Ahada Ashar', 'Thalathata Ashar', 'Asharah'] }
    },
    {
        english: 'Thirteen',
        arabic: 'ثلاثة عشر',
        transliteration: 'Thalathata Ashar',
        imageData: SVG_TEMPLATES.text('13'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Thalathata Ashar', 'Arba\'ata Ashar', 'Ithna Ashar', 'Khamsata Ashar'] }
    },
    {
        english: 'Fourteen',
        arabic: 'أربعة عشر',
        transliteration: 'Arba\'ata Ashar',
        imageData: SVG_TEMPLATES.text('14'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Arba\'ata Ashar', 'Thalathata Ashar', 'Khamsata Ashar', 'Sittata Ashar'] }
    },
    {
        english: 'Fifteen',
        arabic: 'خمسة عشر',
        transliteration: 'Khamsata Ashar',
        imageData: SVG_TEMPLATES.text('15'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Khamsata Ashar', 'Sittata Ashar', 'Arba\'ata Ashar', 'Sab\'ata Ashar'] }
    },
    {
        english: 'Sixteen',
        arabic: 'ستة عشر',
        transliteration: 'Sittata Ashar',
        imageData: SVG_TEMPLATES.text('16'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Sittata Ashar', 'Khamsata Ashar', 'Sab\'ata Ashar', 'Thamaniyata Ashar'] }
    },
    {
        english: 'Seventeen',
        arabic: 'سبعة عشر',
        transliteration: 'Sab\'ata Ashar',
        imageData: SVG_TEMPLATES.text('17'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Sab\'ata Ashar', 'Sittata Ashar', 'Thamaniyata Ashar', 'Tis\'ata Ashar'] }
    },
    {
        english: 'Eighteen',
        arabic: 'ثمانية عشر',
        transliteration: 'Thamaniyata Ashar',
        imageData: SVG_TEMPLATES.text('18'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Thamaniyata Ashar', 'Sab\'ata Ashar', 'Tis\'ata Ashar', 'Ishrun'] }
    },
    {
        english: 'Nineteen',
        arabic: 'تسعة عشر',
        transliteration: 'Tis\'ata Ashar',
        imageData: SVG_TEMPLATES.text('19'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Tis\'ata Ashar', 'Thamaniyata Ashar', 'Ishrun', 'Sab\'ata Ashar'] }
    },
    {
        english: 'Twenty',
        arabic: 'عشرون',
        transliteration: 'Ishrun',
        imageData: SVG_TEMPLATES.text('20'),
        audioData: DUMMY_AUDIO,
        options: { transliterated: ['Ishrun', 'Tis\'ata Ashar', 'Ahada Ashar', 'Asharah'] }
    }
];
