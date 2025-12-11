'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CUISINE_OPTIONS, COMPANION_OPTIONS } from '@/data/constants';

export function AddPlaceDialog() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form State
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async () => {
        if (!supabase) {
            alert('Supabase 설정이 안 되어 있어서 저장할 수 없습니다! (데모 모드)');
            return;
        }
        setLoading(true);
        const { error } = await supabase
            .from('restaurants')
            .insert([
                {
                    name,
                    category,
                    description: comment,
                    tags: ['UserAdded'],
                    price_range: 'MODERATE' // Default
                },
            ]);

        setLoading(false);
        if (error) {
            alert('저장 실패 ㅠ: ' + error.message);
        } else {
            alert('저장되었습니다! 🎉');
            setOpen(false);
            setName('');
            setComment('');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700">
                    나만의 맛집 추가 +
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>숨은 맛집 공유하기</DialogTitle>
                    <DialogDescription>
                        나만 아는 그곳, 모두에게 알려주세요!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            이름
                        </Label>
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} className="col-span-3" placeholder="예: 진주집" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                            종류
                        </Label>
                        <Select onValueChange={setCategory}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="음식 종류" />
                            </SelectTrigger>
                            <SelectContent>
                                {CUISINE_OPTIONS.map(opt => (
                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="comment" className="text-right">
                            한줄평
                        </Label>
                        <Input id="comment" value={comment} onChange={e => setComment(e.target.value)} className="col-span-3" placeholder="JMT구리" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit} disabled={loading}>
                        {loading ? '저장 중...' : '등록하기'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
